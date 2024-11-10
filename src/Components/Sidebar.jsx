import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white fixed w-full top-0 left-0 h-16 flex items-center justify-between px-4 md:px-8 z-50">
      <h1 className="text-lg md:text-xl font-bold">PK Portfolio</h1>
      {/* Hamburger Icon for mobile */}
      <button
        className="md:hidden text-2xl"
        onClick={toggleMenu}
      >
        <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu'}`}></i>
      </button>

      {/* Navigation Links */}
      <nav className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-8`}>
        <ul className="flex flex-col md:flex-row md:space-x-8 text-center">
          <li>
            <a href="#hero" className="hover:text-gray-300 py-2 md:py-0">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300 py-2 md:py-0">About</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-300 py-2 md:py-0">Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-300 py-2 md:py-0">Projects</a>
          </li>
          <li>
            <a href="#experience" className="hover:text-gray-300 py-2 md:py-0">Experience</a>
          </li>
          <li>
            <a href="#certificate" className="hover:text-gray-300 py-2 md:py-0">Certifications</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300 py-2 md:py-0">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
