import React from 'react';
import Modal from 'react-modal';
import Button from 'antd/lib/button';

const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Màu nền của overlay
      zIndex: 1000, // Độ ưu tiên hiển thị
    },
    content: {
      width: '30%',
      height: '13%',
      top: '40%',
      left: '60%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '60%',
      transform: 'translate(-50%, -50%)',
    },
  };
const ConfirmDeleteModal = ({ show, onDelete, onCancel }) => {
  return (
    <Modal
          isOpen={show}
          onRequestClose={onCancel}
          contentLabel="Post Modal"
          style={customStyles}
          content =" content nha"
    >
        <p>Are you sure want to delete the post?</p>
        <Button onClick={onDelete} style={{width: '120px'}}>Yes</Button>
        <Button onClick={onCancel} style={{marginLeft: '50%',width: '80px'}}>No</Button>
    </Modal>
  );
};

export default ConfirmDeleteModal;
