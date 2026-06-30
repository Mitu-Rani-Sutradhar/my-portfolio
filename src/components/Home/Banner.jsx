"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { Download } from "lucide-react"; // missing Download icon import করা হয়েছে

const Banner = () => {
  // Container variant to handle cascading/staggering animations for text items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Time gap between each text element's entry
      },
    },
  };

  // Child variants for text elements sliding up smoothly
  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Reduced y distance slightly for better mobile hardware rendering performance
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };
const text = "Frontend Web Developer";
  return (
    // Added overflow-x-hidden to prevent unexpected mobile horizontal scroll clipping during slide-ins
    <section className="min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-white to-orange-100 py-12 lg:py-0 overflow-x-hidden">
      <div className="container w-11/12 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content (Text Details with Staggered Motion) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl w-full text-center lg:text-left"
          >
            <motion.p variants={itemVariants} className="text-lg font-medium text-primary mb-2">
              Hello, I'm
            </motion.p>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Mitu Rani Sutradhar
            </motion.h1>

            {/* FIXED FOR MOBILE: Tied back into itemVariants so it follows the container stagger stream properly, and updated transform origins */}
         <motion.h2
  className="text-2xl md:text-3xl font-semibold text-gray-500 mb-6 cursor-default origin-center lg:origin-left hover:text-primary"
>
  {text.split("").map((char, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{
        duration: 2,
        delay: index * 0.08,
        repeat: Infinity,
        repeatDelay: 0,
      }}
      className="inline-block"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ))}
</motion.h2>

এতে F → Fr → Fro → ... → Frontend Web Developer এর মতো letter-by-letter অনুভূতি হবে এবং animation non-stop loop করবে।

            <motion.p variants={itemVariants} className="text-gray-600 mb-8 leading-relaxed">
              Passionate Frontend Web Developer skilled in building modern,
              responsive, and scalable web applications using React, Next.js,
              Node.js, Express.js, and MongoDB. I enjoy creating clean user
              interfaces and solving real-world problems through technology.
            </motion.p>

            {/* Resume Buttons with Hover & Tap Feedback */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-8">
              <motion.button
                type="button"
                className="btn btn-primary w-full sm:w-auto min-h-[48px] flex items-center justify-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/MITU RANI SUTRADHAR Resume (1) (13).pdf";
                  link.download = "MITU RANI SUTRADHAR Resume (1) (13).pdf";
                  link.click();
                }}
              >
                Download Resume
                <Download size={18} aria-hidden="true" />
              </motion.button>

              <motion.a
                href="/projects"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline w-full sm:w-auto min-h-[48px] flex items-center justify-center"
              >
                View Projects
              </motion.a>
            </motion.div>

            {/* Social Media Links with dynamic hover animations */}
            <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start">
              {[
                { icon: <FaGithub size={20} />, url: "https://github.com/Mitu-Rani-Sutradhar", label: "GitHub" },
                { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/mituranisutradhar/", label: "LinkedIn" },
                { icon: <FaFacebook size={20} />, url: "https://www.facebook.com/mitu.sutradhar.919113", label: "Facebook" },
               
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn btn-circle btn-outline border-gray-300 hover:border-primary hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div> {/* Left Content এর মেইন ক্লোজিং ট্যাগ এখন সঠিক স্থানে আছে */}

          {/* Right Side Image (Scale entry + Continuous Floating loop) */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
            className="flex justify-center"
          >
            {/* Infinite floating loop to keep the avatar dynamically engaging */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="avatar"
            >
              <div className="w-72 md:w-80 lg:w-96 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 shadow-2xl">
                <Image
                  src="/assets/myPicture.jpeg"
                  alt="Mitu Rani Sutradhar"
                  width={500}
                  height={500}
                  priority
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Banner;