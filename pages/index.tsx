import type { NextPage } from 'next'
import AboutSection from '../components/About/AboutSection'
import Contact from '../components/Contact/Contact'
import Hero from '../components/Hero/Hero'
import ProjectsSection from '../components/Projects/ProjectsSection'


const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <Contact />
    </>
  )
}

export default Home
