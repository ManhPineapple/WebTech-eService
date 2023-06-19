import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import WithoutAuth from '../hooks/withoutAuth';

const Wrapper = styled.div `
    .footer {
        padding-bottom: 20px;
    }

    .links {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .links a {
        text-decoration: none;
        color: #8e8e8e;
        font-size: 13px;
        line-height: 18px;
        margin: 0 8px 12px 8px;
    }
    .copyright {
        padding: 12px 0;
        color: #8e8e8e;
        font-size: 13px;
        line-height: 18px;
        text-align: center;
      }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vh;
  margin: 15vh auto;
  padding: 20px 20px;
  background-color: #fafafa;
  border: 2px solid #dbdbdb;
  border-radius: 5px;

`;

const Logo = styled.img`
  width: 120px;
  margin-bottom: 20px;
`;
const Lock = styled.img`
  width: 100px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;


const Input = styled.input`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #0095f6;
  color: #fff;
  padding: 7px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
`;

const Link = styled.a`
  color: #000000;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  background-color: #ccd8ed;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 8px;
`;

function ResetPassword() {
  const { query: {token} } = useRouter();

  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };
  const handleConfirmNewPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
  };

  const sendLoginLink = (e)=>{
    console.log(e);
    fetch('http://localhost:8000/auth/password/request', {method: 'post', body: {}}) //body: {email}
      .then(res => res.json())
      .then((res) => {
        alert(res.message);
      })
  }

  const handleSubmit = () => {
    console.log(token);
  }
  

  if (token) return (
    <Container>
      <Form onSubmit={handleSubmit}>

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

        <Button type="submit">Change Password</Button>
      </Form>
    </Container>
  );

  return (
    <Wrapper>
        <Container>
            <Logo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Instagram Logo" />
            <Lock src="https://static.vecteezy.com/system/resources/thumbnails/002/205/981/small/lock-icon-free-vector.jpg" alt="Instagram Logo" />
            <Title>Trouble logging in?</Title>
            <p style={{textAlign: 'center'}}>Enter your email and we will send you a link to get back into your account.</p>
            <Form>
                <Input type="email" id="email" name="email" placeholder = "Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <Button type='button' onClick = {()=>sendLoginLink()}>Send login link</Button>
                <div style={{backgroundColor: '#ccd8ed',padding: '10px',marginTop: '20px'}}>
                    <Link href="/login">Back to Login</Link>
                </div>
            </Form>
        </Container>
        <footer className="footer">
            <div className="links">
                <a href="https://about.meta.com/" target='_blank' rel='noreferrer'>
                Meta
                </a>
                <a
                href="https://about.instagram.com/"
                target='_blank'
                rel='noreferrer'
                >
                About
                </a>
                <a
                href='https://about.instagram.com/blog/'
                target='_blank'
                rel='noreferrer'
                >
                Blog
                </a>
                <a
                href='https://about.instagram.com/about-us/careers'
                target='_blank'
                rel='noreferrer'
                >
                Jobs
                </a>
                <a
                href='https://help.instagram.com/'
                target='_blank'
                rel='noreferrer'
                >
                Help
                </a>
                <a
                href='https://developers.facebook.com/docs/instagram'
                target='_blank'
                rel='noreferrer'
                >
                API
                </a>
                <a
                href='https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect'
                target='_blank'
                rel='noreferrer'
                >
                Privacy
                </a>
                <a
                href='https://help.instagram.com/581066165581870/'
                target='_blank'
                rel='noreferrer'
                >
                Terms
                </a>
                <a
                href='https://www.instagram.com/directory/profiles/'
                target='_blank'
                rel='noreferrer'
                >
                Top Accounts
                </a>
                <a
                href='https://www.instagram.com/explore/locations/'
                target='_blank'
                rel='noreferrer'
                >
                Locations
                </a>
                <a
                href='https://www.instagram.com/web/lite/'
                target='_blank'
                rel='noreferrer'
                >
                Instagram Lite
                </a>
                <a
                href='https://www.facebook.com/help/instagram/261704639352628'
                target='_blank'
                rel='noreferrer'
                >
                Contact Uploading & Non-Users
                </a>
                <a
                href='https://about.meta.com/technologies/meta-verified/'
                target='_blank'
                rel='noreferrer'
                >
                Meta Verified
                </a>
            </div>
  
             <div className='copyright'>© {new Date().getFullYear()} Instagram from Meta</div>
        </footer>
    </Wrapper>
    
  );
}

export default WithoutAuth(ResetPassword);
