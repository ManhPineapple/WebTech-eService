import React, { useState } from "react";
import styled from "@emotion/styled";

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmNewPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setErrorMessage("New password and confirm password do not match.");
    } else {
      // TODO: Send a request to the server to change the password
      console.log("Current Password:", currentPassword);
      console.log("New Password:", newPassword);
      console.log("Confirm New Password:", confirmNewPassword);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Label>Current Password</Label>
          <Input
            type="password"
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
          />

          <Label>New Password</Label>
          <Input
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />

          <Label>Confirm New Password</Label>
          <Input
            type="password"
            value={confirmNewPassword}
            onChange={handleConfirmNewPasswordChange}
          />

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

          <Button type="submit">Change Password</Button>
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

const ErrorMessage = styled.p`
  color: red;
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
  margin-top: 60px;
`;

export default ChangePassword;
