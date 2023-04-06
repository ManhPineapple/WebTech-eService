import styled from '@emotion/styled';
import { Button, Card, Form, Input, Layout, Checkbox, Carousel, Row } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { useId, useState } from "react";
import WithoutAuth from 'src/hooks/withoutAuth';
import { useLoginMutation } from '../redux/query/auth.query';
import { useAppSelector } from '../redux/store';
import useApp from 'src/hooks/useApp';

import { FaBuilding, FaCarAlt, FaLock, FaPhoneAlt } from 'react-icons/fa';
import { BsPeople } from 'react-icons/bs';
import { useAgencyRegisterMutation } from 'src/redux/query/register.query';


function LoginPage() {
  const [signUp, setSignUp] = useState(false);

  const mediaAbove875 = useMediaQuery({ minWidth: 875 });
  const unique = useId();
  const [form] = Form.useForm();
  const { refreshToken, userState } = useAppSelector((s) => ({
    refreshToken: s.auth.refreshToken,
    userState: s.user.data,
  }));
  const { notification } = useApp();
  const [loginMutate, { isLoading }] = useLoginMutation();

  const handleLogin = (formData: any) => {
    
    loginMutate(formData)
      .unwrap()
      .then(({ data, message }) => {
        notification.success({ message, placement: 'bottomLeft' });
      })
      .catch((err) => {

      });
  };

  const [agencyRegisterMutate] = useAgencyRegisterMutation();

  const handleSignUp = (formData: any) => {
    const arr = formData.role;
    formData.isTransportation = false; formData.isDriver = false;
    for (const key in arr) {
      if (arr[key] === 'owner') {formData.isTransportation = true; formData.isDriver = true;}
      if (arr[key] === 'trans') {formData.isTransportation = true;}
      if (arr[key] === 'driver') {formData.isDriver = true;}
    }
    delete formData.role;    
    agencyRegisterMutate(formData).unwrap()
    .then(({ data, message }) => {
      notification.success({ message, placement: 'bottomLeft' });
      setSignUp(false);
    })
    .catch((err) => {

    });
  };

  return (
    <PageWrapper>
      <div className='main-container'>
        <Card className='form-container' bordered>
          { !signUp && 
            <Form
              form={form}
              layout='vertical'
              size='large'
              requiredMark={false}
              onFinish={handleLogin}
              disabled={(!!refreshToken && !!userState?.role) || isLoading}
            >
              <Form.Item
                name='phone'
                hasFeedback={isLoading}
                validateStatus={isLoading ? 'validating' : undefined}
                rules={[{ required: true, message: '• Số điện thoại là bắt buộc' }]}
              >
                <Input prefix={<FaPhoneAlt />} type='tel' placeholder='Số điện thoại...' />
              </Form.Item>
              <Form.Item
                name='code'
                hasFeedback={isLoading}
                validateStatus={isLoading ? 'validating' : undefined}
                rules={[
                  { required: true, message: '• Mã đăng nhập là bắt buộc' },
                  { len: 6, message: '• Mã đăng nhập phải chứa đúng 6 chữ số' },
                ]}
              >
                <Input.Password prefix={<FaLock />} placeholder='Mã đăng nhập...' />
              </Form.Item>
              <Form.Item>
                <Button type='primary' htmlType='submit' block>
                  Đăng nhập
                </Button>
              </Form.Item>
              <div className='switch-state'>
                Chưa có tài khoản?_
                <div className='change-btn' onClick={() => setSignUp(true)}>
                  Đăng ký ngay
                </div>
              </div>
            </Form>
          }

          { signUp && 
            <Form
              form={form}
              layout='vertical'
              size='large'
              requiredMark={false}
              onFinish={handleSignUp}
              disabled={(!!refreshToken && !!userState?.role) || isLoading}
            >
              <Form.Item
                name='phone'
                hasFeedback={isLoading}
                validateStatus={isLoading ? 'validating' : undefined}
                rules={[
                  { required: true, message: '• Số điện thoại là bắt buộc' },
                ]}
              >
                <Input prefix={<FaPhoneAlt />} type='tel' placeholder='Số điện thoại...' />
              </Form.Item>
              <Form.Item
                name='name'
                hasFeedback={isLoading}
                validateStatus={isLoading ? 'validating' : undefined}
                rules={[
                  { required: true, message: '• Tên người dùng là bắt buộc' },
                ]}
              >
                <Input prefix={<BsPeople size={22}/>} placeholder='Tên của bạn...' />
              </Form.Item>

              <Form.Item name='role'>
                <Checkbox.Group>
                  <Row> 
                    <Row> <Checkbox value="agency">{<FaCarAlt/>}   Agency (Mặc định là đối tác Pipcar)       </Checkbox> </Row>
                    <Row> <Checkbox value="driver">{<FaCarAlt/>}   Driver (Đăng ký là lái xe)                </Checkbox> </Row>
                    <Row> <Checkbox value="trans"> {<FaBuilding/>} Transportation (Đăng ký chức năng vận tải)</Checkbox> </Row>
                    <Row> <Checkbox value="owner"> {<FaBuilding/>} Owner (Đăng ký lái xe kiêm chủ xe)        </Checkbox> </Row>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
                
              <Form.Item>
                <Button type='primary' htmlType='submit' block>
                  Đăng ký
                </Button>
              </Form.Item>
              <div className='switch-state'>
                Đã có tài khoản?_
                <div className='change-btn' onClick={() => setSignUp(false)}>
                  Đăng nhập ngay
                </div>
              </div>
            </Form>
          }
        </Card>
      </div>

      <footer className="footer">
        <div className="links">
          <a href='https://info.pippip.vn/' target='_blank' rel='noreferrer'>
            Về Pippip
          </a>
          <a
            href='https://docs.google.com/document/d/1o2vT3psHEXMvtx_vgyOrvP0UcuxMJVDFrSf5U1PDvVY/edit?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            Chính sách tuyển dụng lái xe
          </a>
          <a
            href='https://docs.google.com/document/d/1m201PmIjYD5X-OaCN1ce3M7yevL1A8Xu47i6Zs07W-M/edit?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            Điều khoản sử dụng dịch vụ
          </a>
          <a
            href='https://docs.google.com/document/d/12_x1PTXsrZlJt5h83NeVOyIk7zs49moXX4Jge4lj-2Q/edit?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            Điều khoản nhà cung cấp
          </a>
        </div>

        <div className='copyright'>© {new Date().getFullYear()} Pippip. All rights reserved.</div>
      </footer>
    </PageWrapper>
  )
}

const PageWrapper = styled(Layout)`
  height: 100vh;
  overflow: hidden;

  .switch-state {
    text-align: center;
    white-space: pre-wrap;
    .change-btn {
      display: inline;
      text-decoration: underline;
      color: blue;
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
    flex-direction: row;
  }
  .slide-container {
    background-image: url('/iphone.png');
    background-position: -46px 0;
    background-size: 468.32px 634.15px;
    background-repeat: no-repeat;
    width: 380.32px;
    margin-right: 32px;
    z-index: 0;
  }
  .ant-carousel {
    width: 258px;
    margin-right: 14px;
    margin-left: auto;
  }
  .slide-carousel {
    height: 558.15px;
    width: 258px;
    margin-top: 24px;
    z-index: 0;
  }
  .slide-image {
    position: relative;
    height: 545.15px;
    width: 258px;
    border-radius: 24px;
    overflow: hidden;
    & img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
    }
  }

  .form-container {
    flex-grow: 1;
    width: 100%;
    max-width: 400px;
    height: 100%;
    max-height: 500px;
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