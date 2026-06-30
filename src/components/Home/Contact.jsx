"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {
  // কন্টেইনার অ্যানিমেশন (Stagger Effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // উপাদানগুলোর নিচ থেকে ওপরে ওঠার অ্যানিমেশন
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // সোশাল আইকনগুলোর জন্য অ্যানিমেশন ভেরিয়েন্ট
  const iconVariants = {
    hover: {
      y: -5,
      scale: 1.1,
      rotate: 5,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-base-100 to-base-200 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold uppercase tracking-[4px] text-sm">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Contact Me
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-sm md:text-base text-base-content/70 leading-relaxed">
            I'm always open to discussing new projects, creative ideas,
            freelance opportunities, or collaborations. Feel free to reach
            out anytime.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
            className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"
          ></motion.div>
        </motion.div>

        {/* Contact Cards - Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
        >
          {/* Email Card */}
          <motion.a
            href="mailto:mitusutradhar4965@gmail.com"
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            className="bg-base-100 rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 flex items-center gap-5 group cursor-pointer"
          >
            <motion.div 
              whileHover={{ rotate: 15 }}
              className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl bg-primary text-primary-content flex items-center justify-center text-xl md:text-2xl shadow-lg shadow-primary/20"
            >
              <FaEnvelope />
            </motion.div>

            <div className="overflow-hidden">
              <h3 className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors duration-200">
                   Email Address
              </h3>
              <p className="text-sm md:text-base text-base-content/70 break-all mt-0.5">
                mitusutradhar4965@gmail.com
              </p>
            </div>
          </motion.a>

          {/* Phone Card */}
          <motion.a
            href="tel:+8801766984965"
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            className="bg-base-100 rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 flex items-center gap-5 group cursor-pointer"
          >
            <motion.div 
              whileHover={{ rotate: 15 }}
              className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl bg-primary text-primary-content flex items-center justify-center text-xl md:text-2xl shadow-lg shadow-primary/20"
            >
              <FaPhoneAlt />
            </motion.div>

            <div>
              <h3 className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors duration-200">
                Phone Number
              </h3>
              <p className="text-sm md:text-base text-base-content/70 mt-0.5 tracking-wide">
                +880 1766984965
              </p>
            </div>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">
            Connect With Me
          </h3>

          <div className="flex flex-wrap justify-center gap-5 md:gap-6">
            <motion.a
              href="https://github.com/Mitu-Rani-Sutradhar"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className="btn btn-circle btn-lg btn-outline hover:bg-primary hover:border-primary hover:text-primary-content transition-colors duration-300 shadow-md"
            >
              <FaGithub size={24} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/mituranisutradhar/"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className="btn btn-circle btn-lg btn-outline hover:bg-primary hover:border-primary hover:text-primary-content transition-colors duration-300 shadow-md"
            >
              <FaLinkedin size={24} />
            </motion.a>

            <motion.a
              href="https://www.facebook.com/mitu.sutradhar.919113/"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className="btn btn-circle btn-lg btn-outline hover:bg-primary hover:border-primary hover:text-primary-content transition-colors duration-300 shadow-md"
            >
              <FaFacebook size={24} />
            </motion.a>
          </div>
        </motion.div>

        {/* Call To Action (CTA) Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="mt-20"
        >
          <div className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white rounded-3xl p-8 md:p-12 text-center shadow-2xl group">
            
            {/* ব্যাকগ্রাউন্ড ডেকোরেটিভ গ্লো অ্যানিমেশন এফেক্ট */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <h3 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">
              Let's Build Something Amazing Together 🚀
            </h3>

            <p className="max-w-2xl mx-auto mb-8 text-sm md:text-base text-white/90 leading-relaxed">
              Whether you have a project idea, a job opportunity, or just want
              to say hello, I'd love to hear from you.
            </p>

            <motion.a
              href="mailto:mitusutradhar4965@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-neutral btn-md md:btn-lg px-8 rounded-xl shadow-lg border-none hover:bg-neutral-focus font-bold transition-all"
            >
              Send Email
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;