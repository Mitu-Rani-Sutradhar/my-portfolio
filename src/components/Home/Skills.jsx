"use client"; 

import React from "react";
import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  const SkillCategory = ({ title, skills }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-base-100 rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
    >
      <h3 className="text-2xl font-bold text-primary mb-6 text-center">
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-base-200 cursor-pointer transition-colors duration-300 hover:bg-primary/5"
          >
            <span className="text-4xl text-primary mb-3">
              {skill.icon}
            </span>

            <span className="font-medium text-center">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-24 bg-base-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
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

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1 bg-primary mx-auto mt-5 rounded-full"
          ></motion.div>
        </motion.div>

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