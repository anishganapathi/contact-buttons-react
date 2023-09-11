import React from 'react';

const GitHubButton = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="github-button">GitHub</button>
    </a>
  );
};

export default GitHubButton;
