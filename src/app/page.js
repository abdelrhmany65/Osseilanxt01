import Image from "next/image";
import styles from "./page.module.css";
import HeroHome from "./components/[sliders]/herohom/HeroHome";
import ServiceCoponents from "./components/[sliders]/Service/ServiceCoponents";
import About from "./components/About/About";
import ChoseUs from "./components/chose/ChoseUs";
import Experience from "./components/experience/Experience";
import Projects from "./components/Projects/Projects";
import FormContact from "./components/formContact/FormContact";
import { Col, Row } from "react-bootstrap";
import TestimonialSlider from "./components/[sliders]/testimonial/TestimonialSlider";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroHome />
      <section>
        <ServiceCoponents />
      </section>
      <About/>
      <ChoseUs />
      <Experience />
      <Projects />
      <section>
        <FormContact />
      </section>

      <TestimonialSlider />

     
    </div>
  );
}
