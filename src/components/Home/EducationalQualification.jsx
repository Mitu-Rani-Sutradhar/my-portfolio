import React from "react";
import { FaGraduationCap, FaUniversity, FaBookOpen } from "react-icons/fa";

const EducationalQualification = () => {
  const educationData = [
    {
      degree: "Master of Arts (MA)",
      institution: "Shahjalal University of Science and Technology",
      location: "Sylhet, Bangladesh",
      description:
        "Successfully completed my Master of Arts degree, strengthening my analytical thinking, research abilities, communication skills, and problem-solving capabilities. This academic journey helped shape my perspective and professional growth.",
      icon: <FaGraduationCap />,
    },
    {
      degree: "Bachelor of Arts (Honours)",
      institution: "Shahjalal University of Science and Technology",
      location: "Sylhet, Bangladesh",
      description:
        "Completed my Honours degree with a strong academic foundation. Throughout my studies, I developed critical thinking, teamwork, communication, and research skills that continue to support my growth as a Frontend Web Developer.",
      icon: <FaUniversity />,
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Abdul Kadir Molla City College",
      location: "Narsingdi, Bangladesh",
      description:
        "Completed Higher Secondary education, building the academic foundation that inspired my passion for learning and pursuing higher education.",
      icon: <FaBookOpen />,
    },
  ];

  return (
    <section
      id="education"
      className="py-20 md:py-24 bg-gradient-to-b from-base-100 to-base-200"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-primary font-semibold uppercase tracking-[4px]">
            Academic Background
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Educational Qualification
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-base-content/70 leading-7">
            My academic background in Arts and Humanities has strengthened my
            communication, analytical thinking, research, and problem-solving
            abilities. Combined with my passion for technology and continuous
            self-learning, these skills support my journey as a Frontend Web
            Developer.
          </p>

          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-primary/20 -translate-x-1/2"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="w-full lg:w-5/12">
                  <div className="bg-base-100 border border-base-300 rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                      {edu.degree}
                    </h3>

                    <h4 className="text-lg font-semibold">
                      {edu.institution}
                    </h4>

                    <p className="text-sm text-base-content/60 mb-4">
                      {edu.location}
                    </p>

                    <p className="leading-7 text-base-content/80">
                      {edu.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Icon */}
                <div className="relative z-10 my-6 lg:my-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl md:text-3xl shadow-2xl border-4 border-base-100">
                    {edu.icon}
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Card */}
        <div className="mt-16 md:mt-24">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Continuous Learning & Growth 🚀
            </h3>

            <p className="max-w-3xl mx-auto leading-7 md:leading-8">
              While my formal education is in Arts and Humanities, my passion
              for technology inspired me to pursue Frontend Development.
              Through continuous learning, real-world projects, and hands-on
              experience with modern web technologies, I have developed strong
              skills in building responsive, user-friendly, and visually
              engaging web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalQualification;