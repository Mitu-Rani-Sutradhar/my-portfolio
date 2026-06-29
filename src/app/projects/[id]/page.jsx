 import Image from 'next/image';
import Link from 'next/link';
 import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaExternalLinkAlt } from 'react-icons/fa';

 const page = async({params}) => {
    const {id}= await params;

    const devProjects = [
  {
    "_id": "665f1a2b3c4d5e6f7a8b9c03",
    "image": "https://i.ibb.co/spD2hV3D/Screenshot-2026-06-17-014722.png",
    "name": "Care.xyz",
    "mainTechnologyStack": "NEXT.JS, Firebase, Tailwind CSS",
    "briefDescription": "A productivity application that helps users organize tasks, set deadlines, and track project progress.",
    "liveLink": "https://care-xyz-delta.vercel.app/",
    "githubLink": "https://github.com/Mitu-Rani-Sutradhar/care-next-project"
  },
  {
    "_id": "665f1a2b3c4d5e6f7a8b9c02",
    "image": "https://i.ibb.co/xqWcG4nP/Screenshot-2026-06-17-015328.png",
    "name": "LocalChefBazaar",
    "mainTechnologyStack": "React.js, Express.js, MongoDB, Stripe",
    "briefDescription": "A modern e-commerce platform with secure payments, product management, and order tracking features.",
    "liveLink": "https://localchefbazaar-live.vercel.app",
    "githubLink": "https://github.com/Mitu-Rani-Sutradhar/local-chef-bazaar-client"
  },
  {
    "_id": "665f1a2b3c4d5e6f7a8b9c01",
    "image": "https://i.ibb.co/pBzyyygF/Screenshot-2026-06-17-015045.png",
    "name": "green-nest-breaking",
    "mainTechnologyStack": "React.js, Tailwind CSS, MongoDB, Firebase",
    "briefDescription": "A home care service platform that connects families with trusted babysitters, elderly caregivers, and home assistance providers.",
    "liveLink": "https://green-nest-breaking-live.vercel.app",
    "githubLink": "https://github.com/Mitu-Rani-Sutradhar/Green-code-assignment-9"
  }
]

const singleProject = devProjects.find(project => project._id === id);
if(!singleProject){
    return (
        <div>
            Project not found
        </div>
    );
}
    return (
       <div className="max-w-5xl mx-auto px-4 py-10 text-white min-h-screen">
      <div className="bg-base-100 shadow-xl rounded-xl overflow-hidden border border-gray-800">
        <Image
          src={singleProject.image}
          alt={singleProject.name}
          width={800}
          height={400}
          className="w-full h-[400px] object-cover"
        />
        
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-6">
            Project Name: {singleProject.name}
          </h1>

          {/* Grid Information */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-base-200 p-4 rounded-lg border border-gray-800">
              <h3 className="font-semibold text-gray-400 mb-1">Main Technology Stack</h3>
              <p className="text-primary text-xl font-bold">
                {singleProject.mainTechnologyStack}
              </p>
            </div>

            {/* Source Code Button Container */}
            <div className="bg-base-200 p-4 rounded-lg border border-gray-800 flex flex-col justify-between">
              <h3 className="font-semibold text-gray-400 mb-2">Github Link</h3>
              <a
                href={singleProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 w-fit bg-[#1c1e22] text-gray-300 font-bold text-sm tracking-wider uppercase rounded-full border border-gray-700 hover:bg-gray-800 transition-colors"
              >
                <BsGithub size={18} className="text-gray-400" />
                Source Code
              </a>
            </div>

            {/* Live Demo Button Container */}
            <div className="bg-base-200 p-4 rounded-lg border border-gray-800 flex flex-col justify-between">
              <h3 className="font-semibold text-gray-400 mb-2">Live Link</h3>
              <a
                href={singleProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 w-fit bg-[#0a1920] text-[#4fd1c5] font-bold text-sm tracking-wider uppercase rounded-full border border-[#144b4f] hover:bg-[#0e2d35] transition-colors"
              >
                <FaExternalLinkAlt size={18} className="text-[#4fd1c5]" />
                Live Demo
              </a>
            </div>
          </div>

          {/* Back Button */}
          <Link href="/projects">
            <button className="btn btn-primary px-6 py-2 rounded-lg font-medium transition-transform active:scale-95">
              ← Back
            </button>
          </Link>
        </div>
      </div>
    </div>
    );
};

 export default page;
