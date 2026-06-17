"use client";

import Image from "next/image";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Banner = () => {
  return (
    <section className="min-h-screen flex items-center bg-base-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <p className="text-lg font-medium text-primary mb-2">
              Hello, I'm
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Mitu Rani Sutradhar
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-500 mb-6">
              FrontEnd Web Developer
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Passionate Frontend Web Developer skilled in building modern,
              responsive, and scalable web applications using React, Next.js,
              Node.js, Express.js, and MongoDB. I enjoy creating clean user
              interfaces and solving real-world problems through technology.
            </p>

            {/* Resume Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <a
                href="/resume.pdf"
                download
                className="btn btn-primary"
              >
                Download Resume
              </a>

              <a
                href="/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                View Projects
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center">
            <div className="avatar">
              <div className="w-72 md:w-80 lg:w-96 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 shadow-xl">
                <Image
                  src="/assets/myPicture.jpeg"
                  alt="Mitu Rani Sutradhar"
                  width={500}
                  height={500}
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;