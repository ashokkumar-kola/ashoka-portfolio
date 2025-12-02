import React from 'react'

const Socials = () => {
  return (
    <div className="socials">
      <ul>
        <li>
            <a href="https://github.com/yourusername" className='social-link' target="_blank" rel="noopener noreferrer">
                <i className="icon-social-github"></i>
            </a>
        </li>
        <li>
            <a href="https://linkedin.com/in/yourusername" className='social-link' target="_blank" rel="noopener noreferrer">
                <i className="icon-social-linkedin"></i>
            </a>
        </li>
        <li>
            <a href="https://twitter.com/yourusername" className='social-link' target="_blank" rel="noopener noreferrer">
                <i className="icon-social-twitter"></i>
            </a>
        </li>
        <li>
            <a href="https://instagram.com/yourusername" className='social-link' target="_blank" rel="noopener noreferrer">
                <i className="icon-social-instagram"></i>
            </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
