// src/components/Experience.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      const response = await axios.get('https://portfolio-backend-drhl.onrender.com/api/experience');
      setExperiences(response.data);
    };
    fetchExperiences();
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-3xl font-semibold text-center mb-8">Experience</h2>
      <div className="max-w-4xl mx-auto">
        {experiences.map((experience) => (
          <div key={experience._id} className="bg-white shadow-lg rounded-lg p-6 mb-4  ">
            <h3 className="text-xl font-bold">{experience.position} at {experience.companyName}</h3>
            <p className="text-gray-600">{experience.startDate} - {experience.isPresent ? 'Present' : experience.endDate}</p>
            <p className="mt-2">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
