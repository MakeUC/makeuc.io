import React from 'react';
import FooterImage from '../FooterImage';
import {FaEnvelope, FaLinkedin, FaInstagram, FaTwitter, FaGithub} from 'react-icons/fa';
import {IconContext} from 'react-icons';

const Footer = () => (
  <>
  <FooterImage />
  <footer className="container mx-auto py-16 px-3 mb-8 text-gray-800 flex">
    <IconContext.Provider value={{ size:'2em', className:"mx-auto" }}>
      <a target="_blank" href="mailto:contact@makeuc.io" className="flex-1">
        <FaEnvelope />
      </a>
      <a target='_blank' href="https://www.linkedin.com/company/makeuc" className="flex-1">
        <FaLinkedin />
      </a> 
      <a target='_blank' href="https://www.instagram.com/uc_ieee" className="flex-1">
        <FaInstagram />
      </a>
      <a target='_blank' href="https://twitter.com/uc_ieee" className="flex-1">
        <FaTwitter />
      </a>
      <a target='_blank' href="https://github.com/makeuc" className="flex-1">
        <FaGithub />
      </a>
    </IconContext.Provider>
  </footer>
  </>
);

export default Footer;
