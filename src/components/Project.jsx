import React from 'react';

const projects = [
  {
    title: 'Spotify Clone',
    description: 'A responsive music app clone using React, Tailwind CSS, and React Bootstrap.',
    techStack: ['React', 'Tailwind CSS', 'JavaScript'],
    link: 'https://your-project-link.com',
    image: 'https://via.placeholder.com/400x200', // Replace with your image URL or import
  },
  {
    title: 'Blog Website',
    description: 'A dynamic blog platform built with React and Vite.',
    techStack: ['React', 'Vite', 'CSS'],
    link: 'https://your-project-link.com',
    image: 'https://via.placeholder.com/400x200',
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-gray-50 text-gray-900 py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
