import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo & Name */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">
              Mitu<span className="text-primary">.</span>
            </h2>

            <p className="text-base-content/70 mt-2">
              Frontend Web Developer
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-primary transition">
              Home
            </a>

            <a href="#about" className="hover:text-primary transition">
              About
            </a>

            <a href="#skills" className="hover:text-primary transition">
              Skills
            </a>

            <a href="#education" className="hover:text-primary transition">
              Education
            </a>

            <a href="#contact" className="hover:text-primary transition">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline btn-sm"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline btn-sm"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline btn-sm"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="divider my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">

          <p className="text-base-content/70 text-sm">
            © {new Date().getFullYear()} All Rights Reserved by{" "}
            <span className="font-bold text-primary">
              Mitu Rani Sutradhar
            </span>
          </p>

          <p className="flex items-center gap-2 text-sm text-base-content/70">
            Made with <FaHeart className="text-red-500" /> using Next.js &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;