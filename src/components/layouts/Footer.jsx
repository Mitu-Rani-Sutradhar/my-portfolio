"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  // কন্টেইনারের ভেতরের উপাদানগুলো একটার পর একটা আসার জন্য (Stagger Effect)
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1, // চাইল্ড এলিমেন্টগুলোর মধ্যে ডিলে
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="bg-base-200 border-t border-base-300 mt-20 overflow-hidden">
      <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
      >
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          
          {/* Logo & Name */}
          <motion.div 
            variants={itemVariants}
            className="text-center md:text-left group"
          >
            <h2 className="text-3xl font-bold tracking-tight">
              Mitu<span className="text-primary inline-block group-hover:scale-125 transition-transform duration-300">.</span>
            </h2>
            <p className="text-sm md:text-base text-base-content/70 mt-1.5 font-medium">
              Full-Stack Web Developer
            </p>
          </motion.div>

          {/* Quick Links - রেসপন্সিভ টাচ টার্গেট সহ */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold text-base-content/80"
          >
            {["Home", "About", "Skills", "Education", "Contact"].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{ y: -2, scale: 1.05 }}
                className="hover:text-primary transition-colors duration-200"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>

          {/* Social Icons - আকর্ষণীয় স্প্রিং বাউন্স সহ */}
          <motion.div 
            variants={itemVariants}
            className="flex gap-4"
          >
            {[
              { icon: <FaGithub />, url: "https://github.com/yourusername" },
              { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername" },
              { icon: <FaFacebook />, url: "https://facebook.com/yourusername" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="btn btn-circle btn-outline btn-sm hover:bg-primary hover:border-primary hover:text-primary-content transition-colors duration-300 shadow-sm"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider line animation */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[1px] bg-base-300 my-8 origin-left"
        ></motion.div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <motion.p 
            variants={itemVariants}
            className="text-base-content/70 text-xs md:text-sm"
          >
            © {new Date().getFullYear()} All Rights Reserved by{" "}
            <span className="font-bold text-primary hover:underline cursor-pointer">
              Mitu Rani Sutradhar
            </span>
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="flex items-center justify-center gap-2 text-xs md:text-sm text-base-content/70"
          >
            Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="inline-block"
            >
              <FaHeart className="text-red-500" />
            </motion.span>{" "}
            using Next.js & Tailwind CSS
          </motion.p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;