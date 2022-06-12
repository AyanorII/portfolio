import type { NextPage } from 'next'
import AboutSection from '../components/About/AboutSection'
import Hero from '../components/Hero/Hero'


const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <AboutSection />
    </>
  )
}

export default Home
