import { useMediaQuery } from "@mui/material";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
// import AboutSection from "../components/About/AboutSection";
import Head from "../components/Head";
import Hero from "../components/Hero/Hero";
import SocialMediaLinks from "../components/SocialMediaLinks";

const Home: NextPage = () => {
  const isMobile = useMediaQuery("(max-width:899px)");

  const AboutSection = dynamic(
    () => import("../components/About/AboutSection")
  );

  const ProjectsSection = dynamic(
    () => import("../components/Projects/ProjectsSection")
  );

  const Contact = dynamic(() => import("../components/Contact/Contact"));

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
