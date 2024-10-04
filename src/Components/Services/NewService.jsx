import React, { useRef } from 'react'
import { WavyBackground } from "../ui/wavy-background.tsx"
import Carousel from './car.jsx'

import VideoMain from "./content/Valsco.mp4";
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import CategoryGrid from './IconMenu.jsx';
gsap.registerPlugin(ScrollTrigger);





const NewService = () => {

  const textRef = useRef(null); // Reference to the h1 element

  const text = "WELCOME";


   

  useEffect(() => {
   
    const aChars = textRef.current.querySelectorAll(".a");
    const bChars = textRef.current.querySelectorAll(".b");

    setTimeout(() => {
      gsap.fromTo(
        aChars,
        { y: 300, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.5, stagger: 0.25 }
      );

      gsap.fromTo(
        bChars,
        { y: 300, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.6, stagger: -0.25 }
      );
    }, 0);
 
    
 


    

    gsap.fromTo("#page2 #video",
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        delay:0.1,
        scrollTrigger: {
          trigger: "#page2 #video",
          scroller: "body",
          start: "top 60%",
          end: "bottom 80%",
          scrub: 0.4,
        }
      }
    );

  

  }, []);
  return (
   
<div className='bg-[#000]'>
       <WavyBackground className="pb-10  
   
   " >
      <h1 className='text-6xl md:text-4xl lg:text-[22vw] text-white font-semibold inter-var text-center ' ref={textRef}>
      {text.split("").map((char, i) => {
    const halfValue = Math.floor(text.length / 2);
    const className = i < halfValue ? "a" : "b";
    return (
      <span style={{
       
     
      }} className={`${className} lg:text-[21vw] text-[15vw] text-[#fff]`} key={i}>
        {char}
      </span>
    );
  })}
  </h1>
     </WavyBackground>



     <div id="page2" className="flex w-full justify-center object-cover items-center lg:h-[100vh] h-[90vh] lg:translate-y-0 translate-y-[-270px]  ">
        <div id="video">
          <video src={VideoMain}
           
           
            muted
            playsInline
            controls
            className="lg:w-[99%]  lg:ml-2 ml-3 w-[95%] h-full rounded-[30px]"
            onLoadedData={() => {
              console.log("Video loaded!"); 
            }}
          ></video>
        </div>
      </div>

    
    
     <div className='w-full h-[100vh] justify-center items-center mt-[200px] lg:translate-y-[-50px] translate-y-[-200px]'>
     <h1 className='text-2xl md:text-4xl lg:text-4xl text-white font-semibold inter-var text-center translate-y-[30px] absolute z-10 lg:ml-[300px] ml-0 '>For selecting the service please click the card accordingly</h1>
     
      <Carousel/>
      
     </div>
     

     </div>
   
    
     



   
   
   
      
   
      
 
  )
}



export default NewService
