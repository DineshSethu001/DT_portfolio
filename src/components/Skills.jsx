import React from 'react';

export default function Skills() {
  const skillsWithColors = [
    { name: "HTML5", color: "bg-orange-500 text-white" },
    { name: "CSS3", color: "bg-blue-500 text-white" },
    { name: "JavaScript", color: "bg-yellow-300 text-black" },
    { name: "React", color: "bg-cyan-400 text-white" },
    { name: "Tailwind CSS", color: "bg-teal-300 text-black" },
    { name: "Git & GitHub", color: "bg-gray-800 text-white" },
    { name: "Figma", color: "bg-pink-500 text-white" },
    { name: "Responsive Design", color: "bg-green-400 text-white" },
    { name: "REST APIs", color: "bg-indigo-400 text-white" },
  ];

  return (
    <section id="skills" className="bg-white w-full text-gray-800 py-12 px-4 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">My Skills</h2>
        <p className="mb-8 text-sm md:text-base">
          Here are some of the technologies and tools I work with:
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {skillsWithColors.map((skill, index) => (
            <span
              key={index}
              className={`px-4 py-2 rounded shadow-sm transition hover:scale-105 ${skill.color}`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
