import React from 'react';
import InstagramButton from './components/InstagramButton';
import GitHubButton from './components/GitHubButton';
import LinkedInButton from './components/LinkedInButton';
import styles from '../src/styles.css';

const Contact = () => {
  const instagramLink = 'https://www.instagram.com/your_instagram';
  const githubLink = 'https://github.com/your_github';
  const linkedinLink = 'https://www.linkedin.com/in/your_linkedin';

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-buttons">
        <InstagramButton link="https://www.instagram.com/ani.__sh" />
        <GitHubButton link="https://github.com/anishganapathi" />
        <LinkedInButton link="https://www.linkedin.com/in/anish-ganapathi-086049220" />
      </div>
    </div>
  );
};

export default Contact;
