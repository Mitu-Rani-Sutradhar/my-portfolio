import {
  FaCode,
  FaLaptopCode,
  FaPalette,
  FaLightbulb,
} from "react-icons/fa";

const AboutMe = () => {
  return (
    <section id="about" className="py-24 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            About Me
          </h2>

          <div className="w-24 h-1 bg-primary mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Frontend Web Developer
            </h3>

            <p className="text-base-content/80 leading-8 mb-5">
              Hello! I'm <span className="font-bold text-primary">Mitu Rani Sutradhar</span>,
              a passionate Frontend Web Developer who loves transforming ideas
              into beautiful and interactive web experiences. My journey into
              programming started with curiosity about how websites work, and
              that curiosity quickly became a passion for building modern,
              responsive, and user-friendly applications.
            </p>

            <p className="text-base-content/80 leading-8 mb-5">
              I specialize in creating clean user interfaces using
              React, Next.js, JavaScript, Tailwind CSS, and modern frontend
              technologies. I enjoy crafting responsive layouts, optimizing user
              experiences, and turning designs into pixel-perfect websites.
            </p>

            <p className="text-base-content/80 leading-8">
              Outside of coding, I enjoy exploring new technologies, reading
              tech blogs, watching design inspiration videos, listening to
              music, and continuously improving my problem-solving skills. I am
              always eager to learn, collaborate, and create meaningful digital
              experiences.
            </p>
          </div>

          {/* Right Side Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            
            <div className="card bg-base-100 shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="card-body items-center text-center">
                <FaCode className="text-5xl text-primary mb-3" />
                <h3 className="card-title">Programming Journey</h3>
                <p>
                  Started with HTML, CSS, and JavaScript and gradually expanded
                  into React and Next.js development.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="card-body items-center text-center">
                <FaLaptopCode className="text-5xl text-primary mb-3" />
                <h3 className="card-title">What I Enjoy</h3>
                <p>
                  Building responsive websites, interactive interfaces, and
                  creating smooth user experiences.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="card-body items-center text-center">
                <FaPalette className="text-5xl text-primary mb-3" />
                <h3 className="card-title">Creative Side</h3>
                <p>
                  I enjoy UI design, experimenting with layouts, and creating
                  visually appealing digital products.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="card-body items-center text-center">
                <FaLightbulb className="text-5xl text-primary mb-3" />
                <h3 className="card-title">My Goal</h3>
                <p>
                  To become a highly skilled developer and contribute to
                  impactful projects that solve real-world problems.
                </p>
              </div>
            </div>

          </div>
        </div>

       

      </div>
    </section>
  );
};

export default AboutMe;