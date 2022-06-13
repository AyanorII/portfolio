import type { NextPage } from "next";
import AboutSection from "../components/About/AboutSection";
import Contact from "../components/Contact/Contact";
import Head from "../components/Head";
import Hero from "../components/Hero/Hero";
import ProjectsSection from "../components/Projects/ProjectsSection";
import SocialMediaLinks from "../components/SocialMediaLinks";

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <Contact />
      <SocialMediaLinks />
    </>
  );
};

export default Home;
