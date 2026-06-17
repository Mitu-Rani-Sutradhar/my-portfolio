import Link from 'next/link';
import React from 'react';

const page = async({params}) => {
    const {id}= await params;

    const devProjects = [
  {
    "_id": "665f1a2b3c4d5e6f7a8b9c03",
    "image": "https://ibb.co/LDq8MZpq",
    "name": "Care.xyz",
    "mainTechnologyStack": "NEXT.JS, Firebase, Tailwind CSS",
    "briefDescription": "A productivity application that helps users organize tasks, set deadlines, and track project progress.",
    "liveLink": "https://carexyz-live.vercel.app",
    "githubLink": "https://github.com/your-username/carexyz"
  },
  {
    "_id": "665f1a2b3c4d5e6f7a8b9c02",
    "image": "https://ibb.co/B2b7j1hd",
    "name": "LocalChefBazaar",
    "mainTechnologyStack": "React.js, Express.js, MongoDB, Stripe",
    "briefDescription": "A modern e-commerce platform with secure payments, product management, and order tracking features.",
    "liveLink": "https://localchefbazaar-live.vercel.app",
    "githubLink": "https://github.com/your-username/localchefbazaar"
  },
  {
    "_id": "665f1a2b3c4d5e6f7a8b9c01",
    "image": "https://ibb.co/jPMRRRdX",
    "name": "green-nest-breaking",
    "mainTechnologyStack": "React.js, Tailwind CSS, MongoDB, Firebase",
    "briefDescription": "A home care service platform that connects families with trusted babysitters, elderly caregivers, and home assistance providers.",
    "liveLink": "https://green-nest-breaking-live.vercel.app",
    "githubLink": "https://github.com/your-username/green-nest-breaking"
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
           <div className="max-w-5xl mx-auto px-4 py-10">
      

      <div className="bg-base-100 shadow-xl rounded-xl overflow-hidden">
        {/* <img
          src={image}
          alt={title}
          className="w-full h-[400px] object-cover"
        /> */}

        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">Project Name:  {singleProject.name}</h1>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-base-200 p-4 rounded-lg">
              <h3 className="font-semibold">MainTechnologyStack</h3>
              <p className="text-primary text-xl font-bold">
                ${singleProject.mainTechnologyStack}
              </p>
            </div>

            <div className="bg-base-200 p-4 rounded-lg">
              <h3 className="font-semibold">LiveLink</h3>
              <p>{singleProject.liveLink}</p>
            </div>

            <div className="bg-base-200 p-4 rounded-lg">
              <h3 className="font-semibold">Github Link</h3>
              <p>{singleProject.githubLink}</p>
            </div>
          </div>

         
           <Link href={"/projects"}>
           <button className="m-6 btn btn-primary "
      >
        ← Back
      </button></Link>
        </div>
            
      </div>
      
    </div>
    );
};

export default page;