import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

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

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-lg hover:shadow-2xl transition-all duration-300">

      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>

      {/* Image */}
      {/* <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div> */}

      {/* Content */}
      <div className="relative p-6 space-y-3">

        <h3 className="text-xl font-bold text-center tracking-wide">
          {name}
        </h3>

        <p className="text-xs text-center text-gray-300 uppercase tracking-widest">
          {mainTechnologyStack}
        </p>

        <p className="text-sm text-center text-gray-300 line-clamp-3">
          {briefDescription}
        </p>

        {/* Buttons */}
        <div className="mt-5 flex flex-col gap-3">

          {/* GitHub */}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 py-2 text-sm font-medium backdrop-blur-md hover:bg-white/10 transition"
          >
            GitHub
            <FaArrowRight className="group-hover/btn:translate-x-1 transition" />
          </a>

          {/* Live */}
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 py-2 text-sm font-semibold hover:opacity-90 transition"
          >
            Live Link
            <FaArrowRight className="group-hover/btn:translate-x-1 transition" />
          </a>

          {/* Details */}
          <Link
            href={`/projects/${_id}`}
            className="group/btn flex items-center justify-center gap-2 rounded-lg border border-indigo-400/40 py-2 text-sm hover:bg-indigo-500/10 transition"
          >
            View Details
            <FaArrowRight className="group-hover/btn:translate-x-1 transition" />
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;