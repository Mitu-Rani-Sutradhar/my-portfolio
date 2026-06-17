import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-base-100 to-base-200"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-[4px]">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Contact Me
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-base-content/70">
            I'm always open to discussing new projects, creative ideas,
            freelance opportunities, or collaborations. Feel free to reach
            out anytime.
          </p>

          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Email Card */}
          <div className="bg-base-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="text-xl font-bold">Email Address</h3>
                <p className="text-base-content/70 break-all">
                  youremail@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-base-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl">
                <FaPhoneAlt />
              </div>

              <div>
                <h3 className="text-xl font-bold">Phone Number</h3>
                <p className="text-base-content/70">
                  +880 1XXXXXXXXX
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Connect With Me
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-lg btn-outline hover:scale-110 transition"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-lg btn-outline hover:scale-110 transition"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-lg btn-outline hover:scale-110 transition"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>

        {/* Call To Action */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Let's Build Something Amazing Together 🚀
            </h3>

            <p className="max-w-2xl mx-auto mb-6">
              Whether you have a project idea, a job opportunity, or just want
              to say hello, I'd love to hear from you.
            </p>

            {/* <a
              href="mailto:youremail@gmail.com"
              className="btn btn-neutral btn-lg"
            >
              Send Email
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;