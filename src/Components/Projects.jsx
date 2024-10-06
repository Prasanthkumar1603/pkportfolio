// src/components/Projects.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
 
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://portfolio-backend-drhl.onrender.com/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {projects.map((project) => (
          <div key={project._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={project.imageURL} alt={project.projectName} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{project.projectName}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <a 
                href={project.sourceCodeLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline mt-2 block"
              >
                View Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
