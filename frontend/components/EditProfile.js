import React, { useState } from "react";
import styled from "@emotion/styled";

function EditProfile() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, e.g., send it to the server
    console.log("Name:", name);
    console.log("Username:", username);
    console.log("Bio:", bio);
  };

  return (
    <Wrapper>
      <Container>
        <Title>Edit Profile</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Name</Label>
          <Input type="text" value={name} onChange={handleNameChange} />

          <Label>Username</Label>
          <Input type="text" value={username} onChange={handleUsernameChange} />

          <Label>Bio</Label>
          <Textarea value={bio} onChange={handleBioChange} />

          <Button type="submit">Save Changes</Button>
        </Form>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  max-width: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
`;

const Textarea = styled.textarea`
  height: 100px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  height: 40px;
  background-color: #3897f0;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default EditProfile;
