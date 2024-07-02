import React from 'react';
import './ImageModal.css';

function ImageModal({ image, closeModal, navigateImages }) {
  return (
    <div className="image-modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <img src={image} alt="Modal" />
        <div className="navigation">
          <button onClick={() => navigateImages(-1)}>&#10094;</button>
          <button onClick={() => navigateImages(1)}>&#10095;</button>
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
