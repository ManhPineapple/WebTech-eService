import styled from '@emotion/styled';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal-container {
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .modal-container .text-redirect {
    margin-top: 36px;
    text-align: center;
    color: rgba(0, 0, 0, 0.65);
  }
  .modal-container .text-counter {
  }
`;

const Loader = () => {
  return (
    <ModalWrapper>
      <div className='modal-container'>
      </div>
    </ModalWrapper>
  );
};

export default Loader;
