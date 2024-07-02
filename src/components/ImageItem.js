import React from 'react';
import './ImageItem.css';

function ImageItem({ image, openModal }) {
  return (
    <div className="image-item" onClick={() => openModal(image)}>
      <img src={image} alt="Gallery" />
    </div>
  );
}

export default ImageItem;
