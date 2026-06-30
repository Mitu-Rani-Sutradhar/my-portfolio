"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaBookOpen } from "react-icons/fa";

const EducationalQualification = () => {
  // শিক্ষাগত যোগ্যতার ডাটা অ্যারে
  const educationData = [
    {
      id: 1,
      degree: "Master's in Bengali Language and Literature",
      institution: "Shahjalal University of Science and Technology",
      duration: "2018-2019",
      result: "CGPA: 3.50/ 4.00",
      description: "Focused on Bengali Language",
      icon: <FaGraduationCap />,
    },
    {
      id: 2,
      degree: "B.A(Hons) in Bengali Language and Literature",
      institution: "Shahjalal University of Science and Technology",
      duration: "2014-2018",
      result: "CGPA: 3.34 / 4.00",
      description: "Focused on Bengali Language",
      icon: <FaGraduationCap />,
    },
    {
      id: 3,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Abdul Kadir Mollah City College",
      duration: "2012-2014",
      result: "GPA: 5.00 / 5.00",
      description: "Arts background with major focus on English and bangla",
      icon: <FaSchool />,
    }
    
  ];

  // কন্টেইনার অ্যানিমেশন (Stagger Effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // একটি কার্ডের পর আরেকটি কার্ড আসবে
      },
    },
  };

  // প্রতিটি টাইমলাইন কার্ডের অ্যানিমেশন
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="education" className="py-24 bg-base-100 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold uppercase tracking-widest text-sm">
            Education & Learning
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Educational Qualification
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1 bg-primary mx-auto mt-5 rounded-full"
          ></motion.div>
        </motion.div>

        {/* Timeline Layout - সম্পূর্ণ রেসপন্সিভ মোবাইল থেকে ডেস্কটপ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l border-base-content/20 ml-4 md:ml-32 space-y-12"
        >
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="relative pl-8 md:pl-12 group"
            >
              {/* টাইমলাইন আইকন এফেক্ট */}
              <motion.div 
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="absolute -left-[21px] top-1 bg-base-100 border-2 border-primary text-primary w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-md group-hover:bg-primary group-hover:text-primary-content transition-colors duration-300 cursor-pointer z-10"
              >
                {edu.icon}
              </motion.div>

              {/* কার্ড কন্টেন্ট (সম্পূর্ণ রেসপন্সিভ প্যাডিং ও শ্যাডো) */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-base-200 rounded-3xl p-6 md:p-8 shadow-lg border border-base-content/5 hover:shadow-xl transition-all duration-300"
              >
                {/* ডিগ্রি ও সময়কাল */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-base-content group-hover:text-primary transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <span className="text-sm px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full w-max">
                    {edu.duration}
                  </span>
                </div>

                {/* প্রতিষ্ঠান ও রেজাল্ট */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-base-content/70 font-medium mb-4 text-sm md:text-base">
                  <span className="text-base-content font-semibold">{edu.institution}</span>
                  <span className="hidden sm:inline text-base-content/30">|</span>
                  <span className="text-primary font-bold bg-base-100 px-3 py-0.5 rounded-lg shadow-sm border border-base-content/5 w-max">
                    {edu.result}
                  </span>
                </div>

              


               
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default EducationalQualification;