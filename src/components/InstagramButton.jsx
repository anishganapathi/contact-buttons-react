import React from 'react';

const InstagramButton = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="instagram-button">Instagram</button>
    </a>
  );
};

export default InstagramButton;
