"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../card/ProjectCard";

const projects = [
  {
    "_id": "665f1a2b3c4d5e6f7a8b9c03",
    "image": "https://i.ibb.co/spD2hV3D/Screenshot-2026-06-17-014722.png",
    "name": "Care.xyz",
    "mainTechnologyStack": "Next.js, Firebase, Tailwind CSS",
    "briefDescription": "A productivity application that helps users organize tasks, set deadlines, and track project progress.",
    "liveLink": "https://care-xyz-delta.vercel.app/",
    "githubLink": "https://github.com/Mitu-Rani-Sutradhar/care-next-project"
  },
  {
    "_id": "665f1a2b3c4d5e6f7a8b9c02",
    "image": "https://i.ibb.co/xqWcG4nP/Screenshot-2026-06-17-015328.png",
    "name": "LocalChefBazaar",
    "mainTechnologyStack": "React.js, Node.js, Express.js, MongoDB, Stripe",
    "briefDescription": "A modern e-commerce platform with secure payments, product management, and order tracking features.",
    "liveLink": "https://chef-bazaar-8992b.web.app/",
    "githubLink": "https://github.com/Mitu-Rani-Sutradhar/local-chef-bazaar-client"
  },
  {
    "_id": "665f1a2b3c4d5e6f7a8b9c01",
    "image": "https://i.ibb.co/pBzyyygF/Screenshot-2026-06-17-015045.png",
    "name": "green-nest-breaking",
    "mainTechnologyStack": "React.js, MongoDB, Firebase",
    "briefDescription": "This platform connects with trusted babysitters, elderly caregivers, and home assistance providers.",
    "liveLink": "https://green-nest-breaking.web.app/",
    "githubLink": "https://github.com/Mitu-Rani-Sutradhar/Green-code-assignment-9"
  }
];

const Projects = () => {
  // কার্ড কন্টেইনারের জন্য Staggered এন্ট্রি অ্যানিমেশন
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // প্রতিটি কার্ড একটু ডিলে করে পর পর আসবে
      },
    },
  };

  // প্রতিটি প্রজেক্ট কার্ডের নিচ থেকে ওপরে ওঠার অ্যানিমেশন
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 16,
      },
    },
  };

  return (
    <section id="projects" className="py-24 bg-base-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading উইথ অ্যানিমেশন */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold uppercase tracking-widest text-sm">
            My Creative Works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Featured Projects
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
            className="h-1 bg-primary mx-auto mt-5 rounded-full"
          ></motion.div>
        </motion.div>

        {/* Projects Grid Layout (Responsive Grid & Framer Motion wrapper) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch"
        >
          {projects.map((project) => (
            <motion.div
              key={project._id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;