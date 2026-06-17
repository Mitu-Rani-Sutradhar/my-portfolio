
import AboutMe from "@/components/Home/AboutMe";
import Banner from "@/components/Home/Banner";
import Contact from "@/components/Home/Contact";
import EducationalQualification from "@/components/Home/EducationalQualification";
import Projects from "@/components/Home/Projects";
import Skills from "@/components/Home/Skills";
import Image from "next/image";

export default function Home() {
  return (
<div className="text-center">
 
  <section>
    <Banner></Banner>
  </section>
  <section>
    <AboutMe></AboutMe>
  </section>
  <section>
    <Skills></Skills>
  </section>
  <section>
    <EducationalQualification></EducationalQualification>
  </section>
  <section>
    <Projects></Projects>
  </section>
  <section>
    <Contact></Contact>
  </section>
</div>
  );
}
