import React from "react";
import "./skills.css"; // Pastikan mengimpor file CSS ini untuk styling

const skillsData = [
  { name: "HTML", percentage: 80 },
  { name: "CSS", percentage: 70 },
  { name: "Javascript", percentage: 65 },
  { name: "React", percentage: 65 },
];

const Skills = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h2 className="text-3xl font-extrabold mb-8 text-gray-800">Skills</h2>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow-xl">
        {skillsData.map((skill, index) => (
          <div key={index} className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold text-gray-700">
                {skill.name}
              </span>
              <span className="font-medium text-gray-600">
                {skill.percentage}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
              <div
                className="progress-bar h-full rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
