import styled from "@emotion/styled";
import React, { useState } from "react";
import { useAppSelector } from 'src/redux/store';

function EditProfile() {
  const { user } = useAppSelector((s) => ({
    user: s.user.data,
  }));

  const initFile = new File(['Hello, world!'], 'hello.txt', { type: 'text/plain' });
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(initFile);
  const [bio, setBio] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, e.g., send it to the server
    const body = new FormData();
    body.append("avatar", avatar);
    body.append("fullname", name);
    body.append("bio", bio);
    body.append("username", user.username);
    fetch('http://localhost:8000/user/update', {
      method: 'PUT',
      body: body,
      credentials: 'include'
    }).then(res => res.json())
      .then((res) => {
        alert(res.message);
      })
  };

  return (
    <Wrapper>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Label>Fullname</Label>
          <Input type="text" value={name} onChange={handleNameChange} />

          <Label>Bio</Label>
          <Textarea value={bio} onChange={handleBioChange} />

          <Label>Avatar</Label>
          <Input style={{border:'none'}} type="file" accept="image/*" onChange={handleAvatarChange} />

          <Button type="submit">Save Changes</Button>
        </Form>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 50vh;
`;

const Container = styled.div`
  padding: 20px;
  background-color: white;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  height: 40px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
  width: 100%;
`;

const Textarea = styled.textarea`
  height: 100px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
  width: 100%;
`;

const Button = styled.button`
  height: 40px;
  background-color: #3897f0;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 40px;
`;

const ImagePreview = styled.img`
  margin: auto;
  height: 45vh;
  width: auto;
  max-width: 50vh;
  background-color: #f5225e;
  border: 1px solid #000000;
`;

export default EditProfile;
