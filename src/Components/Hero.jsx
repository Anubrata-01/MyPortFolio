import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Anubrata from "../Images/Anubrata.png"
import { Bio } from '../data/constant';

const Hero = () => {
 const phrases = Bio.roles;
 const [phraseIndex, setPhraseIndex] = useState(0);
 const [charIndex, setCharIndex] = useState(0);

 useEffect(() => {
    const timer = setInterval(() => {
      setCharIndex((prevCharIndex) => prevCharIndex + 1);
    }, 250);

    return () => {
      clearInterval(timer);
    };
 }, []);

 useEffect(() => {
    if (charIndex >= phrases[phraseIndex].length) {
      setPhraseIndex((prevPhraseIndex) => (prevPhraseIndex + 1) % phrases.length);
      setCharIndex(0);
    }
 }, [charIndex]);

 return (
    <div className='w-full h-full flex flex-col-reverse justify-between md:flex md:flex-row md:w-full md:h-full mt-0 md:mt-[8%]  pt-[20%] md:pt-0 z-1 pl-[10%] md:pl-[1%]'>
      <div className='w-2/3 md:w-1/2  '>
        <div className='leftside relative top-[14%] md:top-[32%] left-[8%] md:left-[10%]'>
          <h1 className='  text-2xl font-bold text-white md:text-4xl'>Hi, I am <br className='' /> <span className='text-white'>{Bio?.name}</span></h1>
          <p className=' items-center text-xl font-bold text-white md:text-3xl pt-2 md:pt-2 '>I am a <span className=' text-purple-700'>{phrases[phraseIndex].substring(0, charIndex)}</span><span className="cursor"></span></p>
          <div className='text-white pt-4 md:pt-3'>{Bio?.description}</div>
          <div>
            <button>Check resume</button>
          </div>
        
        </div>
        {/* <div>{Bio?.description}</div> */}
      </div>
      <div className='w-1/2  rounded-md'>
        <img src={Anubrata} alt="" className=' bg-[#FF9671] w-full md:[550px] border-2 -mt-5 md:-mt-0' style={{borderRadius:"80%"}}/>
      </div>
    </div>
 )
}

export default Hero;

