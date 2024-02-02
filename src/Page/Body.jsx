import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Skills from '../Components/Skills';
import Education from '../Components/Education';
import Footer from '../Components/Footer';
const Body = () => {
   
  return (
    <div className='w-full h-full relative top-0 flex flex-col justify-between bg-gradient-to-b from-[#BAB7C3] via-[#191B1F] to-[#8D9594] md:w-full md:h-full ' >
        <Navbar/>
        <Hero/>
        <Skills/>
        <Education/>
        <Footer/>

    </div>
    
  )
}

export default Body;