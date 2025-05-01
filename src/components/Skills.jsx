import React from 'react';

export default function Skills() {
  const skills = [
    "HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", 
    "Git & GitHub", "Figma", "Responsive Design", "REST APIs"
  ];

  return (
    <section id="skills" className="bg-white w-full text-gray-800 py-12 px-4 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">My Skills</h2>
        <p className="mb-8 text-sm md:text-base">
          Here are some of the technologies and tools I work with:
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-100 border border-gray-300 px-4 py-2 rounded shadow-sm hover:bg-blue-100 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
