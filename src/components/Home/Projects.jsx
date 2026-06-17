import React from "react";
import ProjectCard from "../card/ProjectCard";


const projects = 
[
  {
    "_id": "665f1a2b3c4d5e6f7a8b9c03",
    "image": "https://ibb.co/LDq8MZpq",
    "name": "Care.xyz",
    "mainTechnologyStack": "Next.js, Firebase, Tailwind CSS",
    "briefDescription": "A productivity application that helps users organize tasks, set deadlines, and track project progress.",
    "liveLink": "https://carexyz-live.vercel.app",
    "githubLink": "https://github.com/your-username/carexyz"
  },
  {
    "_id": "665f1a2b3c4d5e6f7a8b9c02",
    "image": "https://ibb.co/B2b7j1hd",
    "name": "LocalChefBazaar",
    "mainTechnologyStack": "React.js, Node.js, Express.js, MongoDB, Stripe",
    "briefDescription": "A modern e-commerce platform with secure payments, product management, and order tracking features.",
    "liveLink": "https://localchefbazaar-live.vercel.app",
    "githubLink": "https://github.com/your-username/localchefbazaar"
  },
  {
    "_id": "665f1a2b3c4d5e6f7a8b9c01",
    "image": "https://ibb.co/jPMRRRdX",
    "name": "green-nest-breaking",
    "mainTechnologyStack": "React.js, React,MongoDB, Firebase",
    "briefDescription": "This platform connects with trusted babysitters,elderly caregivers,and home assistance providers.",
    "liveLink": "https://green-nest-breaking-live.vercel.app",
    "githubLink": "https://github.com/your-username/green-nest-breaking"
  }
]
const Projects = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;