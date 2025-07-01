import React from 'react'
import Hero from './Hero'
import Stats from './Stats'
import GlowingNetwork from './GlowingNetwork'
import Services from './Services'
import IndustrySolutions from './IndustrySolutions'
import About from './About'
import OurServices from './OurServices'

const HomePage = () => {
  return (
    <div  className="">
      <Hero />
      <About />
      <Stats />
      <GlowingNetwork />
      <OurServices />
      {/* <Services /> */}
      <IndustrySolutions />
    </div>
  );
}

export default HomePage