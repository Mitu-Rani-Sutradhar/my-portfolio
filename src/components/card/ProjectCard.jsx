import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const {
    _id,
    name,
    image,
    mainTechnologyStack,
    briefDescription,
    liveLink,
    githubLink,
  } = project;
  console.log(image);

  return (
   <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br text-white shadow-lg hover:shadow-2xl transition-all duration-300">

      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>

      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      

      {/* Content */}
      <div className="relative p-6 space-y-4">

        <h3 className="text-xl text-black bg-primary rounded-2xl py-2 font-bold text-center tracking-wide">
          {name}
        </h3>

        {/* 1. Updated Tech Stack Section to match your screenshot pill styling */}
        <div className="flex flex-wrap gap-2 justify-center pt-2">
          {/* If mainTechnologyStack is an array, you can map over it. 
              If it's a string, you can split it by comma: mainTechnologyStack.split(',') */}
          {Array.isArray(mainTechnologyStack) ? (
            mainTechnologyStack.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 text-sm font-semibold rounded-lg border border-teal-950/40 bg-blue-900 text-white tracking-wide shadow-inner"
              >
                {tech}
              </span>
            ))
          ) : (
            <span className="px-3 py-1 text-sm font-semibold rounded-lg border border-teal-950/40 bg-blue-900 text-white tracking-wide shadow-inner">
              {mainTechnologyStack}
            </span>
          )}
        </div>

       

        {/* 2. Updated Action Buttons Layout to be inline/horizontal */}
        <div className="mt-6 flex items-center justify-center gap-4">

          {/* Source Code / GitHub */}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-xs font-black tracking-wider uppercase text-white hover:bg-zinc-800 transition"
          >
            <FaGithub className="text-xl text-zinc-400" />
            <span>Source Code</span>
          </a>

          {/* Live Demo */}
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-teal-950/50 bg-teal-950/20 px-4 py-2 text-xs font-black tracking-wider uppercase text-white hover:bg-teal-950/40 transition"
          >
            <FaExternalLinkAlt className="text-lg text-cyan-400" />
            <span>Live Demo</span>
          </a>

        </div>

        {/* Details Link (Kept subtle at the bottom center if still needed) */}
        <div className="text-center pt-2">
          <Link
            href={`/projects/${_id}`}
            className="text-xs bg-primary p-2 rounded-2xl hover:text-indigo-300 transition underline underline-offset-4"
          >
            View Details
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;