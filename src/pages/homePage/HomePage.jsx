import React from 'react'
import Hero from './Hero'
import Stats from './Stats'
import GlowingNetwork from './GlowingNetwork'
import Services from './Services'
import IndustrySolutions from './IndustrySolutions'
import About from './About'
import OurServices from '../servicesPage/OurServices'
import Testimonial from './Testimonial'
import Collaborate from '../../components/Collaborate'
import TechnologiesWeUse from './TechnologiesWeUse'

const HomePage = () => {
  return (
    <div  className="">
      <Hero />
      <About />
      <Stats />
      <GlowingNetwork />
      <OurServices />
      {/* <Services /> */}
      {/* <IndustrySolutions /> */}

      <TechnologiesWeUse />
      <Testimonial />
      <Collaborate />
    </div>
  );
}

export default HomePage