import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaStackOverflow } from 'react-icons/fa';

const IconBar = () => {
  return (
    <div className="flex gap-6 mt-10">
      <a href="https://github.com/SamueEel90" target="_blank" rel="noopener noreferrer" className="text-primary text-3xl hover:text-white transition duration-300">
        <FaGithub />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary text-3xl hover:text-white transition duration-300">
        <FaLinkedin />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary text-3xl hover:text-white transition duration-300">
        <FaInstagram />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary text-3xl hover:text-white transition duration-300">
        <FaFacebook />
      </a>
      <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer" className="text-primary text-3xl hover:text-white transition duration-300">
        <FaStackOverflow />
      </a>
    </div>
  );
};

export default IconBar;
