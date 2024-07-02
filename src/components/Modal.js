import React from 'react';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../styles/Modal.css';

function Modal({ image, closeModal, showNextImage, showPreviousImage }) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <FaTimes className="close-button" onClick={closeModal} />
        <FaArrowLeft className="arrow left-arrow" onClick={showPreviousImage} />
        <img src={image} alt="" className="modal-image" />
        <FaArrowRight className="arrow right-arrow" onClick={showNextImage} />
      </div>
    </div>
  );
}

export default Modal;
