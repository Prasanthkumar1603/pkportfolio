// src/components/About.js
import React from 'react';
import aboutImage from '../assets/about.jpg'; // Ensure you have the correct path to your image

const About = () => {
  return (
    <section className="bg-gray-100 py-10"  >
      <h2 className="section-title text-3xl font-semibold text-center mb-6">About</h2>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:flex-row items-center justify-between ">
        <div className=" flex flex-col md:flex-row items-center justify-between ">
          <div className="about__img mb-6 md:mb-0 md:w-1/2 flex justify-center">
            <img src={aboutImage} alt="About Me" className="rounded-lg shadow-md w-3/4 h-auto" />
          </div>

          {/* Right Side: Content */}
          <div className="md:w-1/2">
            <h2 className="about__subtitle text-2xl font-semibold mb-4">I am Prasanthkumar</h2>
            <p className="about__text text-lg text-gray-700 mb-4">
              I am an IT professional with a passion for developing innovative programs that enhance the efficiency and effectiveness of organizational success. I am well-versed in technology and proficient in writing code to create reliable and user-friendly systems.
            </p>
            {/* My Goals Section */}
          </div>

        </div>
        <h3 className="text-2xl font-semibold mt-6 mb-4 text-center">My Goals</h3>
        <p className="text-lg text-gray-700 mb-4 text-center">
          I aim to contribute to meaningful projects that have a positive impact on people's lives.
          My goal is to continuously grow as a developer and be a part of a dynamic team where I can learn from others and share my knowledge as well.
        </p>

      </div>



    </section>
  );
};

export default About;
