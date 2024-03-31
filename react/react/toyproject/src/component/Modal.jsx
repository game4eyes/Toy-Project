import React, { useState } from 'react'; // useState import 추가
import Modal from 'react-modal';

function PopupMessage({ message, isOpen, closeModal }) {
  const [modalOpen, setModalOpen] = useState(isOpen); // isOpen 상태를 모달 열림 여부로 사용

  const customModalStyles = {
    // 모달 스타일 지정
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    closeModal(); // 부모 컴포넌트로부터 전달받은 closeModal 함수 호출하여 부모 컴포넌트에서도 모달 상태를 갱신
  };

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={handleCloseModal} // handleCloseModal 함수로 변경
      style={customModalStyles}
      ariaHideApp={false}
      contentLabel="Pop up Message"
      shouldCloseOnOverlayClick={true}
    >
      <div>{message}</div>
    </Modal>
  );
}

export default PopupMessage;