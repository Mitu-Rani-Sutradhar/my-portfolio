"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaPalette,
  FaLightbulb,
} from "react-icons/fa";

const AboutMe = () => {
  // Container variants
  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  // Item variants
  const cardItemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.92 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 15,
      },
    },
  };

  // Text variants
  const textVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: custom * 0.15,
      },
    }),
  };

  return (
    <section id="about" className="py-24 bg-base-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold uppercase tracking-widest text-sm">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            About Me
          </h2>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
            className="h-1 bg-primary mx-auto mt-5 rounded-full"
          ></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-5"
          >
            <motion.h3 variants={textVariants} custom={0} className="text-3xl font-bold mb-6">
              Frontend Web Developer
            </motion.h3>

            <motion.p variants={textVariants} custom={1} className="text-base-content/80 leading-8">
              Hello! I'm <span className="font-bold text-primary">Mitu Rani Sutradhar</span>,
              a passionate Frontend Web Developer who loves transforming ideas
              into beautiful and interactive web experiences. My journey into
              programming started with curiosity about how websites work, and
              that curiosity quickly became a passion for building modern,
              responsive, and user-friendly applications.
            </motion.p>

            <motion.p variants={textVariants} custom={2} className="text-base-content/80 leading-8">
              I specialize in creating clean user interfaces using
              React, Next.js, JavaScript, Tailwind CSS, and modern frontend
              technologies. I enjoy crafting responsive layouts, optimizing user
              experiences, and turning designs into pixel-perfect websites.
            </motion.p>

            <motion.p variants={textVariants} custom={3} className="text-base-content/80 leading-8">
              Outside of coding, I enjoy exploring new technologies, reading
              tech blogs, watching design inspiration videos, listening to
              music, and continuously improving my problem-solving skills. I am
              always eager to learn, collaborate, and create meaningful digital
              experiences.
            </motion.p>
          </motion.div>

          {/* Right Side Cards */}
          <motion.div 
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 gap-6"
          >
            
            {/* Card 1 */}
            <motion.div 
              variants={cardItemVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="card bg-base-100 shadow-xl border border-base-content/5 transition-shadow duration-300 hover:shadow-2xl cursor-pointer"
            >
              <div className="card-body items-center text-center p-6">
                <div className="p-3 bg-primary/10 rounded-2xl mb-2 text-primary text-4xl">
                  <FaCode />
                </div>
                <h3 className="card-title text-xl font-bold mt-2">Programming Journey</h3>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  Started with HTML, CSS, and JavaScript and gradually expanded into React and Next.js development.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={cardItemVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="card bg-base-100 shadow-xl border border-base-content/5 transition-shadow duration-300 hover:shadow-2xl cursor-pointer"
            >
              <div className="card-body items-center text-center p-6">
                <div className="p-3 bg-primary/10 rounded-2xl mb-2 text-primary text-4xl">
                  <FaLaptopCode />
                </div>
                <h3 className="card-title text-xl font-bold mt-2">What I Enjoy</h3>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  Building responsive websites, interactive interfaces, and creating smooth user experiences.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              variants={cardItemVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="card bg-base-100 shadow-xl border border-base-content/5 transition-shadow duration-300 hover:shadow-2xl cursor-pointer"
            >
              <div className="card-body items-center text-center p-6">
                <div className="p-3 bg-primary/10 rounded-2xl mb-2 text-primary text-4xl">
                  <FaPalette />
                </div>
                <h3 className="card-title text-xl font-bold mt-2">Creative Side</h3>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  I enjoy UI design, experimenting with layouts, and creating visually appealing digital products.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              variants={cardItemVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="card bg-base-100 shadow-xl border border-base-content/5 transition-shadow duration-300 hover:shadow-2xl cursor-pointer"
            >
              <div className="card-body items-center text-center p-6">
                <div className="p-3 bg-primary/10 rounded-2xl mb-2 text-primary text-4xl">
                  <FaLightbulb />
                </div>
                <h3 className="card-title text-xl font-bold mt-2">My Goal</h3>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  To become a highly skilled developer and contribute to impactful projects that solve real-world problems.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;