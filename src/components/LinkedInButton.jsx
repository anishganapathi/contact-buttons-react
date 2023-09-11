import React from 'react';

const LinkedInButton = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="linkedin-button">LinkedIn</button>
    </a>
  );
};

export default LinkedInButton;
