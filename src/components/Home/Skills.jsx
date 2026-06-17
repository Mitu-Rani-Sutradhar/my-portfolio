import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiFigma,
} from "react-icons/si";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ];

  const toolsSkills = [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Figma", icon: <SiFigma /> },
  ];

  const SkillCategory = ({ title, skills }) => (
    <div className="bg-base-100 rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
      <h3 className="text-2xl font-bold text-primary mb-6 text-center">
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-base-200 hover:scale-105 transition duration-300"
          >
            <span className="text-4xl text-primary mb-3">
              {skill.icon}
            </span>

            <span className="font-medium text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest">
            My Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Skills & Technologies
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-base-content/70">
            Technologies and tools I use to build modern,
            responsive, and user-friendly web applications.
          </p>

          <div className="w-24 h-1 bg-primary mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          <SkillCategory
            title="Frontend"
            skills={frontendSkills}
          />

          <SkillCategory
            title="Backend"
            skills={backendSkills}
          />

          <SkillCategory
            title="Tools"
            skills={toolsSkills}
          />
        </div>

      </div>
    </section>
  );
};

export default Skills;