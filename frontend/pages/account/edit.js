import styled from "@emotion/styled";
import React, { useState } from "react";
import ChangePassword from "src/components/ChangePassword";
import EditProfile from "src/components/EditProfile";
import Layout from "src/components/Layout";

function Settings() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, e.g., send it to the server
    console.log("Name:", name);
    console.log("Username:", username);
    console.log("Bio:", bio);
  };

  const [activeTab, setActiveTab] = useState("edit");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "edit":
        return <EditContent />;
      case "privacyAndSecurity":
        return <PrivacyAndSecurityContent />;
      default:
        return null;
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="navWrapper">
          <Layout></Layout>
        </div>
  
        <div className="editWrapper">
          <Container>
            <Navbar>
              <NavItem
                active={activeTab === 'edit'}
                onClick={() => handleTabChange('edit')}
              >
                Edit Profile
              </NavItem>
              <NavItem
                active={activeTab === 'privacyAndSecurity'}
                onClick={() => handleTabChange('privacyAndSecurity')}
              >
                Change password
              </NavItem>
            </Navbar>
            {renderContent()}
          </Container>
        </div>
      </div>
    </Wrapper>
  );
}
  
const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: row;
  }

  .navWrapper {
    position: relative;
    flex: 0.2;
  }

  .editWrapper {
    position: relative;
    flex: 0.8;
  }
`;
const Container = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 20px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Navbar = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const NavItem = styled.div`
  font-size: 16px;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  color: ${({ active }) => (active ? "#262626" : "#999999")};
  margin-right: 20px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    color: #262626;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const EditContent = () => (
  <div>
    <EditProfile/>
  </div>
);


const PrivacyAndSecurityContent = () => (
  <div>
    <ChangePassword />
  </div>
);


export default Settings;
