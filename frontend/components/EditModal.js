import Button from 'antd/lib/button';
import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  content: {
    width: '70%',
    height: '90%',
    top: '50%',
    left: '60%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '60%',
    transform: 'translate(-50%, -50%)',
  },
};
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
const ImagePreview = styled.img`
  margin: auto;
  height: 45vh;
  width: auto;
  max-width: 50vh;
  background-color: #f5225e;
  border: 1px solid #000000;
`;
const ConfirmDeleteModal = ({ show, onEdit, onCancel, post }) => {
  const [caption, setCaption] = useState(post.content);
  const [image, setImage] = useState(null);
  const [imgURL, setImageURL] = useState(post.postImage);
  
const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const imageURL = URL.createObjectURL(file);
    console.log(imageURL);
    setImageURL(imageURL);
};
  
const handleCaptionChange = (e) => {
    setCaption(e.target.value);
};

return (
    <Modal
      isOpen={show}
      onRequestClose={onCancel}
      contentLabel="Post Modal"
      style={customStyles}
    >
      <Title>Edit Post</Title>
      <Form onSubmit={onEdit}>
        <Label>Caption</Label>
        <Textarea
          value={caption}
          onChange={handleCaptionChange}
          placeholder="Write a caption..."
        />

        <Label>Image</Label>
        <Input type="file" accept="image/*" onChange={handleImageChange} />
        <ImagePreview src={imgURL} />
        <Button style={{ marginTop: '20px' }} onClick={onEdit}>
          Confirm Edit
        </Button>
        <CancelButton onClick={onCancel}>Cancel</CancelButton>
      </Form>
    </Modal>
);
};

export default ConfirmDeleteModal;