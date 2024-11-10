import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-6 mt-10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="footer__title text-xl font-bold mb-4">Prasanthkumar</p>

        {/* Social Links */}
        <div className="footer__social mb-4 flex justify-center space-x-4">
          <a 
            href="https://www.linkedin.com/in/prasanthkumar-ravichandran-9a1ba926a/" 
            className="footer__icon hover:text-gray-400" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className='bx bxl-linkedin text-3xl'></i>
          </a>
          <a 
            href="https://github.com/Prasanthkumar1603" 
            className="footer__icon hover:text-gray-400" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className='bx bxl-github text-3xl'></i>
          </a>
          <a 
            href="https://www.facebook.com/rprasanth.kumar.77" 
            className="footer__icon hover:text-gray-400" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className='bx bxl-facebook text-3xl'></i>
          </a>
          <a 
            href="https://www.instagram.com/pk.coolboy_/" 
            className="footer__icon hover:text-gray-400" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className='bx bxl-instagram text-3xl'></i>
          </a>
        </div>

        {/* Contact Info */}
        <p className="footer__contact mb-4">
          <span>Email: <a href="mailto:prasanthkumar.pk.official@gmail.com" className="text-gray-300 hover:text-gray-400">prasanthkumar.pk.official@gmail.com</a></span><br />
          <span>Mobile: <a href="tel:+919047842657" className="text-gray-300 hover:text-gray-400">9047842657</a></span>
        </p>

        {/* Copyright */}
        <p className="footer__copy text-sm">
          &#169; {new Date().getFullYear()} CodeByPK. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
