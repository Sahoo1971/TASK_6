import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/Image.css';

function Image({ src, openModal }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="image-container" onClick={openModal} ref={ref}>
      {inView ? <img src={src} alt="" className="image" /> : <div className="image-placeholder" />}
    </div>
  );
}

export default Image;
