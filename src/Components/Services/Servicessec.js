import React, { useEffect ,useRef} from 'react';
import { gsap } from 'gsap';

import VideoMain from "./content/Valsco.mp4";
import Carousel from './car';
// scroll trigger
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const Servicessec = () => {
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
        { y: 0, opacity: 1, duration: 0.5, delay: 0.5, stagger: -0.25 }
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

  

  }, [text]);

  return (
    <>
   
   <div className='w-full lg:h-screen h-[600px]  flex items-center bg-gradient-to-b from-[#bd4343] via-[#d02950] to-[#fff] justify-center flex-col'>
   <h1
  ref={textRef}
 
  className="font-bold text-center flex justify-center items-center h-screen"
>
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



</div>

     

     

      <div id="page2" className="flex w-full justify-center object-cover items-center lg:h-[100vh] h-[90vh] ">
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

      <div id="cardsdiv" className='h-screen w-full'>
        
        <Carousel/>
      </div>
    </>
  );
};

export default Servicessec;
