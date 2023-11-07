import React, { useEffect } from 'react';

import { StyledModal } from './StyledModal.styled';

const Modal = ({ modalData, closeModal}) => {
  // const handleKeyDown = event => {
  //   if (event.code === 'Escape') {
  //     closeModal();
  //   }
  // };

useEffect(() => {
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  window.addEventListener('keydown', handleKeyDown);
  document.body.style.overflow = 'hidden';

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'auto';
  };
}, [closeModal]);
  // }



  const handleOverayClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  

  
    return (
      <StyledModal >
        <div className="Overlay" onClick={handleOverayClick}>
            <div className="Modal">
                <img src={modalData} alt="" className="bigImage"/>
            </div>
        </div>
      </StyledModal>
    );
  
}
export default Modal;