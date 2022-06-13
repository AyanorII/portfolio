import type { NextPage } from 'next'
import AboutSection from '../components/About/AboutSection'
import Contact from '../components/Contact/Contact'
import Hero from '../components/Hero/Hero'
import ProjectsSection from '../components/Projects/ProjectsSection'
import SocialMediaLinks from '../components/SocialMediaLinks'


const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <Contact />
      <SocialMediaLinks />
    </>
  )
}

export default Home
