import { useMediaQuery } from "@mui/material";
import type { NextPage } from "next";
import AboutSection from "../components/About/AboutSection";
import Contact from "../components/Contact/Contact";
import Head from "../components/Head";
import Hero from "../components/Hero/Hero";
import ProjectsSection from "../components/Projects/ProjectsSection";
import SocialMediaLinks from "../components/SocialMediaLinks";

const Home: NextPage = () => {
  const isMobile = useMediaQuery("(max-width:899px)");

  return (
    <>
      <Head />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <Contact />
      {!isMobile && <SocialMediaLinks />}
    </>
  );
};

export default Home;
