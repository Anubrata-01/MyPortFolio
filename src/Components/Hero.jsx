import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Anubrata from "../Images/Anubrata.png"

const Hero = () => {
 const phrases = ['Web Developerr','FrontEnd Developerr'];
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
    <div className='w-full flex justify-between'>
      <div className='w-1/2 '>
        <div className='leftside relative top-8 md:top-32 left-4 md:left-20'>
          <h1 className='  text-2xl font-bold text-white md:text-4xl'>Hi, I am <br className='' /> <span className='text-white'>Anubrata Chanda</span></h1>
          <p className=' items-center text-xl font-bold text-white md:text-3xl '>I am a <span className=' text-purple-700'>{phrases[phraseIndex].substring(0, charIndex)}</span><span className="cursor"></span></p>
        </div>
      </div>
      <div className='w-1/2'>
        <img src={Anubrata} alt="" className='w-auto -mt-8'/>
      </div>
    </div>
 )
}

export default Hero;

