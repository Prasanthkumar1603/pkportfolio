// src/components/Skills.js
import React from 'react';

const skillsData = [
  {
    name: 'React.js',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/react.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://th.bing.com/th/id/OIP.bPZyL4LA65gU6WXGycc-NAHaIi?rs=1&pid=ImgDetMain', // Updated icon for Node.js
  },
  {
    name: 'Express.js',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/express.svg',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/mongodb.svg',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/tailwindcss.svg',
  },
  {
    name: 'UI/UX Design',
    icon: 'https://www.egbsystems.com/wp-content/uploads/2020/10/cropped-ux-and-ui.png', // Alternatively, you can use this icon
    // 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/sketch.svg' // Another option for UI/UX Design
  },
  {
    name: 'Git & GitHub',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/git.svg',
  },
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/html5.svg',
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/css3.svg',
  },
  {
    name: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/bootstrap.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/javascript.svg',
  },
  {
    name: 'Flutter',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/flutter.svg',
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/python.svg',
  },
  {
    name: 'SQL',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/sqlite.svg',
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/figma.svg',
  },
];

const Skills = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-blue-50 p-4 rounded-lg shadow-md transition transform hover:scale-105"
            >
              <img src={skill.icon} alt={skill.name} className="h-12 mb-2" />
              <h3 className="text-lg font-medium text-gray-700">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
