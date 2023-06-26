/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled';
import { Button, Card, Form, Input, Layout } from 'antd';
import Link from 'next/link';
import { useState } from "react";
import WithoutAuth from 'src/hooks/withoutAuth';
import { useLoginMutation } from '../redux/query/auth.query';

import { AiFillFacebook, AiOutlineMail } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { FaLock, FaPhoneAlt, FaSignature } from 'react-icons/fa';
import { useRegisterMutation } from 'src/redux/query/auth.query';
 
function LoginPage() {
  const [signUp, setSignUp] = useState(false)
  const [form] = Form.useForm();

  const [loginMutate, { isLoading }] = useLoginMutation();

  const handleLogin = (formData: any) => {
    loginMutate(formData)
      .unwrap()
      .then(({ data, message }) => {
        alert(message);
      })
      .catch(({data, message}) => {
        alert(message)
      })
  };

  const [registerMutate] = useRegisterMutation();

  const handleSignUp = (formData: any) => {
    registerMutate(formData)
      .unwrap().then(({ data, message }) => {
        alert(message);
        setSignUp(false);
      })
      .catch(({data, message}) => {
        alert(message)
      })
  };

  return (
    <PageWrapper>
      <div className='main-container'>
        <Card className='form-container' bordered>
          { !signUp && (
            <Form
              form={form}
              layout="vertical"
              size="large"
              requiredMark={false}
              onFinish={handleLogin}
              disabled={isLoading}
            >
              <div className="img-instagram-container">
                <i
                  data-visualcompletion="css-img"
                  aria-label="Instagram"
                  role="img"
                  className="img-instagram"
                ></i>
              </div>
              <Form.Item
                name="username"
                rules={[{ required: true, message: '• Trường này là bắt buộc' }]}
              >
                <Input
                  prefix={<FaPhoneAlt />}
                  type="tel"
                  placeholder="Phone number, username, or email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: '• Mật khẩu là bắt buộc' }]}
              >
                <Input.Password prefix={<FaLock />} placeholder="Password" />
              </Form.Item>

              <Form.Item>
                <Button
                  style={{
                    backgroundColor: '#0095F6',
                    paddingTop: '3px',
                    fontWeight: 'bold',
                    color: 'white',
                  }}
                  htmlType="submit"
                  block
                >
                  Log in
                </Button>
              </Form.Item>

              <div className="label-or-container">
                <div className="line-label"></div>
                <label className="label-or">OR</label>
                <div className="line-label"></div>
              </div>

              <div>
                <Link href="">
                  <div className="login-facebook-container">
                    <AiFillFacebook
                      size={30}
                      className="facebook-icon"
                      color="#385185"
                    />
                    <span
                      style={{
                        fontWeight: 'bold',
                        color: '#385185',
                        fontSize: '16px',
                      }}
                    >
                      Log in with Facebook
                    </span>
                  </div>
                </Link>
              </div>

              <div className="forgot-password-container">
                <Link href="/resetpassword">
                  <span style={{ fontSize: '14px', color: 'black' }}>
                    Forgot password?
                  </span>
                </Link>
              </div>
            </Form>
          )}

          { signUp && (
            <Form
              form={form}
              layout="vertical"
              size="large"
              requiredMark={false}
              onFinish={handleSignUp}
              disabled={isLoading}
            >
              <div className="img-instagram-container">
                <i
                  data-visualcompletion="css-img"
                  aria-label="Instagram"
                  role="img"
                  className="img-instagram"
                ></i>
              </div>

              <div
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginBottom: '10px',
                }}
              >
                Sign up to see photos and videos from your friends
              </div>

              <Form.Item>
                <Button
                  block
                  className="login-facebook-container"
                  style={{ backgroundColor: '#0095F6', paddingTop: '3px' }}
                >
                  <AiFillFacebook size={25} className="facebook-icon" color="white" />
                  <span
                    style={{ fontWeight: 'bold', color: 'white', fontSize: '15px' }}
                  >
                    Log in with Facebook
                  </span>
                </Button>
              </Form.Item>

              <div
                className="label-or-container"
                style={{ marginBottom: '25px' }}
              >
                <div className="line-label"></div>
                <label className="label-or">OR</label>
                <div className="line-label"></div>
              </div>

              <Form.Item
                name="email"
                rules={[{ required: true, message: '• Email is required' }]}
              >
                <Input
                  prefix={<AiOutlineMail />}
                  type="email"
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="fullname"
                rules={[{ required: true, message: '• Full Name is required' }]}
              >
                <Input prefix={<FaSignature size={22} />} placeholder="Full Name" />
              </Form.Item>

              <Form.Item
                name="username"
                rules={[{ required: true, message: '• User name is required' }]}
              >
                <Input prefix={<BsPeople size={22} />} placeholder="User name" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: '• Password is required' }]}
              >
                <Input.Password prefix={<FaLock />} placeholder="Password" />
              </Form.Item>

              <div style={{ textAlign: 'center', fontSize: '12px', margin: '10px' }}>
                <span>
                  People who use our service may have uploaded your contact information
                  to Instagram.&nbsp;
                  <a href="https://www.facebook.com/help/instagram/261704639352628">
                    Learn more.
                  </a>
                </span>
                <br></br>
                <br></br>
                <span>
                  By signing up, you agree to our&nbsp;
                  <a>Terms</a>&nbsp;,&nbsp;<a>Privacy Policy</a> &nbsp;and&nbsp;
                  <a>Cookies Policy</a>.
                </span>
              </div>
              <Form.Item>
                <Button htmlType="submit" block style={{ backgroundColor: '#0095F6', paddingTop: '3px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 'bold', color: 'white' }}>
                    Sign up
                  </span>
                </Button>
              </Form.Item>
            </Form>
          )}
        </Card>
        <Card className='card-signup'>
          <div className='signup-container'>
            <div className='switch-state'>
                {signUp ? 'Have an account?': 'Don'+"'t"+ ' have an account?'}
                &nbsp;
                <div className='change-btn' onClick={() => setSignUp(!signUp)}>
                {signUp ? 'Login              ': 'Sign up'}
                </div>
            </div>
          </div>
        </Card>
        <div className='get-app-container'>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px'}}>
            <span>Get the app</span>
          </div>
          <div className='get-app-container_img-container'>
            <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DD3643E85-E336-40AD-8324-1F119EBE44A7%26utm_content%3Dlo%26utm_medium%3Dbadge">
              <img alt="Get it on Google Play" className="img" src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"/>
            </a>
            <a href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C2560%2C1392"> 
              <img alt="Get it from Microsoft" className="img" src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"/>
            </a>
          </div>
        </div>
      </div>
      
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
    </PageWrapper>
  )
}

const PageWrapper = styled(Layout)`
  height: 100vh;

  .switch-state {
    display: flex;
    justify-content: center;
    text-align: center;
    white-space: pre-wrap;
    .change-btn {
      display: inline;
      color: #0095f6;
      font-weight: bold;
    }
    .change-btn:hover {
      cursor: pointer;
    }
  }

  .main-container {
    width: 100%;
    flex-grow: 1;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .form-container {
    flex-grow: 1;
    width: 100%;
    max-width: 400px;
    height: 100%;
    max-height: 700px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    .form-header {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      margin-bottom: 20px;
    }

    .ant-card-body {
      padding: 24px 32px;
    }
    .ant-input-prefix {
      color: #8e8e8e;
    }
    .ant-form-item-explain {
      margin-bottom: 12px;
    }

    .ant-form-item-label label {
      height: fit-content !important;
    }
  }

  .footer {
    padding-bottom: 52px;
    padding-top: 24px;
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
  .label-or-container {
    display : flex;
    align-items: center;
    justify-content: center;
  }
  .line-label {
    height: 1px;
    width: 45%;
    border-bottom: 1px solid #CCCCCC;
  }
  .label-or {
    margin-left: 8px;
    margin-right: 8px;
    color: #8c8c8c;
  }
  .facebook-icon {
    display: inline-block;
  }
  .login-facebook-container {
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }
  .forgot-password-container {
    display: flex;
    justify-content: center;
    margin: 20px;
  }
  .img-instagram {
    background-image: url(https://static.cdninstagram.com/rsrc.php/v3/yS/r/ajlEU-wEDyo.png);
    background-position: 0px -52px;
    background-size: auto;
    width: 175px;
    height: 51px;
    background-repeat: no-repeat;
    display: inline-block;
  }
  .img-instagram-container {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
  .signup-container {
    flex-grow: 1;
    width: 100%;
    max-width: 400px;
    height: 100%;
    max-height: 500px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    margin-left: 20px;
    margin-right: 130px;
  }
  .card-signup {
    margin: 20px;
  }
  .img {
    height: 40px;
    margin: 10px;
  }
  .get-app-container {
    
  }
  .get-app-container_img-container {

  }
  @media screen and (max-width: 767.98px) {
    .form-container .ant-card-body {
      padding: 24px 24px;
    }
  }
  @media screen and (max-width: 384.98px) {
    .form-container {
      border: none !important;
      border-radius: 0;
    }
    .links a {
      margin-bottom: 8px;
    }
    .form-error-list li {
      line-height: 1.4;
    }
  }
`
  
export default WithoutAuth(LoginPage)