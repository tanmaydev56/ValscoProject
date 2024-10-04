import React, { useEffect, useRef, useState } from 'react';
import Photo1 from "../../Assets/ServicesPage_Assets/ui-ux.png";
import Photo2 from "../../Assets/backend dev.png";
import Photo3 from "../../Assets/app dev.png";
import styles from "./Carousel.module.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const radius = 250; // Distance from the center
  const imgWidth = 200;
  const imgHeight = 330;
  const totalImages = 3; // Adjust based on number of images
  const angleStep = 360 / totalImages; // Angle between each image

  const dragRef = useRef(null);
  const spinRef = useRef(null);
  const [rotation, setRotation] = useState(0); // Track current rotation angle

  const rotateImages = (direction) => {
    setRotation((prevRotation) => {
      const newRotation = direction === 'next' ? prevRotation - angleStep : prevRotation + angleStep;
      return newRotation;
    });
  };

  useEffect(() => {
    const ospin = spinRef.current;
    const odrag = dragRef.current;
    const aEle = [...ospin.getElementsByTagName('a')]; // Change 'img' to 'a'

    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    function init() {
      for (let i = 0; i < aEle.length; i++) {
        aEle[i].style.width = imgWidth + "px";
        aEle[i].style.height = imgHeight + "px";
        aEle[i].style.position = 'absolute'; // Make sure the anchor is positioned absolutely
        aEle[i].style.transform = `rotateY(${i * angleStep}deg) translateZ(${radius}px)`; // Apply the transform to <a>
        aEle[i].style.transition = "transform 1s";
      }
    }

    function applyTransform() {
      ospin.style.transform = `rotateY(${rotation}deg)`;
    }

    // Initialize the carousel and apply transformations when rotation changes
    init();
    applyTransform();
  }, [rotation, imgWidth, imgHeight, radius, angleStep]);

  return (
    <div className={styles.bodyy}>
      <div id="drag-container" className={styles.dragContainer} ref={dragRef}>
        <div id="spin-container" className={styles.spinContainer} ref={spinRef}>

          {/* Wrap each image in an anchor tag and ensure the 3D effect is applied to the anchor tag */}
          <Link to="/checkOutForm?course=UI-UX" target="_blank" rel="noopener noreferrer">
            <img src="/ui-ux.jpg" alt="Image 1" className='object-cover w-[100%] h-[100%]' />
          </Link>

          <Link to="/checkOutForm?course=WebDevelopment" target="_blank" rel="noopener noreferrer">
            <img src="/webDev4.jpg" alt="Image 2" />
            </Link>

            <Link to="/checkOutForm?course=AppDev" target="_blank" rel="noopener noreferrer">
  <img src="/AppDev.jpg" alt="Image 3" />
</Link>


        </div>
        <div className={styles.controls}>
          <button className={styles.buttonn} onClick={() => rotateImages('back')}>
            <FaArrowLeft />
          </button>
          <button className={styles.buttonn} onClick={() => rotateImages('next')}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
