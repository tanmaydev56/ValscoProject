import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BreakTextComponent = () => {
  const textRef = useRef(null); // Reference to the h1 element

  const text = "Hello World";

  useEffect(() => {
    const aChars = textRef.current.querySelectorAll(".a");
    const bChars = textRef.current.querySelectorAll(".b");

    
    setTimeout(() => {
      gsap.fromTo(
        aChars,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, delay: 0.5, stagger: 0.15 }
      );

      gsap.fromTo(
        bChars,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, delay: 0.5, stagger: -0.15 }
      );
    }, 0);
  }, [text]);

  return (
    <h1
      ref={textRef}
      className="text-6xl font-bold text-center flex justify-center items-center h-screen"
    >
      {text.split("").map((char, i) => {
        const halfValue = Math.floor(text.length / 2);
        const className = i < halfValue ? "a" : "b";
        return (
          <span style={{
            fontSize: "200px ", // Enforcing font size with !important
          }} className={className} key={i}>
            {char}
          </span>
        );
      })}
    </h1>
  );
};

export default BreakTextComponent;
