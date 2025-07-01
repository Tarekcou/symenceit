import React from 'react'
import ServiceGrid from './ServiceGrid';
import HowWeWork from './HowWeWork';
import Services from '../homePage/Services';
import Collaborate from '../../components/Collaborate';
import OurServices from './OurServices';

const ServicePage = () => {
  return (
    <div className='space-y-4 mx-auto mt-36'>
      <div className='space-y-6'>
        <h1 className='font-bold text-2xl md:text-4xl text-center'>Core Expertise Infinite Services</h1>
        <p className='mx-auto w-10/12'>
          With deep technical knowledge and a focus on innovation, we provide
          customized solutions that solve complex challenges and drive business
          growth. Our expert team transforms core expertise into scalable,
          impactful results that empower industries to thrive.
        </p>
      </div>

      <ServiceGrid />
      <HowWeWork />
      <OurServices />
      <Collaborate />
    </div>
  );
}

export default ServicePage