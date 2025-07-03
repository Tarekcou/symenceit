import React from 'react'
import ServiceGrid from './ServiceGrid';
import HowWeWork from './HowWeWork';
import Services from '../homePage/Services';
import Collaborate from '../../components/Collaborate';
import OurServices from './OurServices';
import { Player } from '@lottiefiles/react-lottie-player';
import servicesLottie from "../../assets/servicesLottie.json"
const ServicePage = () => {
  return (
    <div className=' mx-auto  '>
      <div className=' space-y-6 bg-amber-50 pt-36'>
        <h1 className='font-bold text-2xl md:text-5xl text-center'>Core Expertise Infinite Services</h1>
        <p className='mx-auto text-center w-8/12'>
          With deep technical knowledge and a focus on innovation, we provide
          customized solutions that solve complex challenges and drive business
          growth. Our expert team transforms core expertise into scalable,
          impactful results that empower industries to thrive.
        </p>

          <Player
          className='bg-amber-50'
          autoplay
                loop          
               src={servicesLottie}
                 style={{ height: "200px", width: "100%" }}
               />
      </div>

      <ServiceGrid />
      <HowWeWork />
      <OurServices />
      <Collaborate />
    </div>
  );
}

export default ServicePage