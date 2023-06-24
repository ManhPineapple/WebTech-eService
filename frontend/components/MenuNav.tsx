import styled from '@emotion/styled';
import { Menu, MenuProps } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StrictMode, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineAddBox } from 'react-icons/md';
import { TiLocationArrowOutline } from 'react-icons/ti';
import { useAppSelector } from 'src/redux/store';

function MenuNav() {
  const { userState } = useAppSelector((s) => ({
    userState: s.user.data,
  }));

  const items: Required<MenuProps>['items'] = [
    { 
      label: <Link className='linkMenu' href='/'>Home</Link>,
      icon: <AiFillHome size={26} color='black'/>,
      key: 'HOME',
      className: 'side-menu-item',
    },
    {
      label: <Link className='linkMenu' href='/'>Search</Link>,
      icon: <BsSearch size={26} color='black'/>,
      key: 'SEARCH',
      className: 'side-menu-item',
    },
    {
      label: <Link className='linkMenu' href='/message'>Message</Link>,
      icon: <TiLocationArrowOutline size={26} color='black'/>,
      key: 'MESSAGE',
      className: 'side-menu-item',
    },
    {
      label: <a className='linkMenu' >Create</a>,
      icon: <MdOutlineAddBox size={26} color='black'/>,
      key: 'CREATE',
      className: 'side-menu-item',
    },
    {
      label: <Link className='linkMenu' href={`account/${userState?.username}`}>Profile</Link>,
      icon: <CgProfile size={26} color='black'/>,
      key: 'PROFILE',
      className: 'side-menu-item',
    },
  ];
  
  const initFile = new File(['Hello, world!'], 'hello.txt', { type: 'text/plain' });
  const { asPath, push } = useRouter();
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState<File>(initFile);
  const [showModal, setShowModal] = useState(false);
  const [imgURL, setImageURL] = useState("https://png.pngtree.com/png-clipart/20200226/original/pngtree-colourful-watercolour-textured-background-and-square-vintage-frame-suitable-for-wedding-png-image_5323297.jpg");

  const handleCaptionChange = (e: any) => {
    setCaption(e.target.value);
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
    const imageURL = URL.createObjectURL(file);
    setImageURL(imageURL);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // TODO: Send a request to the server to create the post
    const new_post = new FormData();
    new_post.append("image", image);
    new_post.append("caption", caption);
    fetch('http://localhost:8000/forum/createpost', {
      method: 'POST',
      body: new_post,
      credentials: 'include'
    }).then(res => res.json())
      .then((res) => {
        alert(res.message);
      })
    // Reset the form after submitting
    setCaption("");
    setImage(initFile);
    // Close the modal
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const handleModalClick = (e: any) => {
    e.stopPropagation();
  };
  return (
    <MenuWrapper>
      <StrictMode>
        <Menu
          selectable={false}
          theme='light'
          defaultSelectedKeys={[asPath]}
          style={{backgroundColor:'transparent' }}
          mode='inline'
          className='side-menu'
          items={items}
          onClick={(e)=>{
            switch(e.key){
              case 'HOME':
                break;
              case 'SEARCH':
                break;
              case 'MESSAGE':
                break;
              case 'CREATE':
                openModal();
                break;
              case 'PROFILE':
                break;
            }
          }}
        />
      </StrictMode>
      <Wrapper>
      {showModal && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={handleModalClick}>
            <Title>Create Post</Title>
            <Form onSubmit={handleSubmit}>
              <Label>Caption</Label>
              <Textarea
                value={caption}
                onChange={handleCaptionChange}
                placeholder="Write a caption..."
              />

              <Label>Image</Label>
              <Input type="file" accept="image/*" onChange={handleImageChange} />
              <ImagePreview src={imgURL} />
              <Button>Create</Button>
              <CancelButton onClick={closeModal}>Cancel</CancelButton>
            </Form>
          </ModalContent>
        </Modal>
      )}
    </Wrapper>
    </MenuWrapper>
  );
}
const Button = styled.button`
  height: 30px;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f5225e;
  margin-top: 40px;
`
const ImagePreview = styled.img`
  margin: auto;
  height: 45vh;
  width: auto;
  max-width: 50vh;
  background-color: #f5225e;
  border: 1px solid #000000;
`;
const Input = styled.input`
  margin-bottom: 16px;
`;
const CancelButton = styled.button`
  height: 30px;
  background-color: #523a40;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Textarea = styled.textarea`
  height: 60px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
`;
const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  width: 90vh;
  height: 90vh;
  padding: 10px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;

const MenuWrapper = styled.main`
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-top: 20px;

  .linkMenu {
    color: black !important;
  }
  .side-menu-item {
    margin: 15px 5px;
    background-color: white;
  }
`;
export default MenuNav;
