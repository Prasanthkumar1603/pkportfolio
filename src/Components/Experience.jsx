// src/components/Experience.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get('https://portfolio-backend-drhl.onrender.com/api/experience');
        setExperiences(response.data);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };
    fetchExperiences();
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-3xl font-semibold text-center mb-8">Experience</h2>

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience) => (
            <div
              key={experience._id}
              className="bg-white shadow-lg rounded-lg p-6 mb-4 transform transition duration-300 hover:shadow-2xl hover:scale-105"
            >
              <h3 className="text-xl font-bold">{experience.position} at {experience.companyName}</h3>
              <p className="text-gray-600">{experience.startDate} - {experience.isPresent ? 'Present' : experience.endDate}</p>
              <p className="mt-2">{experience.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Experience;
