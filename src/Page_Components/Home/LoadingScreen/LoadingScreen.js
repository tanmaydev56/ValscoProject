import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";
import { Helmet } from "react-helmet-async";
import Intro from "../Introduction/Intro";

export const LoadingScreen = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    const boxNone = () => {
      let box = document.getElementsByClassName("box")[0];
      if (box) {
        box.style.display = "none";
        let text = document.getElementsByClassName("text")[0];
        text.style.display = "flex";
        text.style.flexWrap = "wrap";
      }
    };

    const allDis = () => {
      let text = document.getElementsByClassName("text")[0];
      if (text) {
        text.classList.add("pos");
      }
    };

    const showOneByOne = () => {
      let hide = document.getElementsByClassName("hide");
      let counter = 0;

      const showNext = () => {
        if (hide && counter < hide.length) {
          hide[counter].classList.add("show" + counter);
          counter++;
          setTimeout(showNext, 600);
        }
      };

      showNext();
      setTimeout(() => {
        setIsLoadingComplete(true);
      }, 3500);
    };

    setTimeout(boxNone, 820);
    setTimeout(allDis, 1500);
    setTimeout(showOneByOne, 1000);
  }, []);

  return (
    <>
      <Helmet>
        <title>Valsco</title>
        <title>Welcome to VALSCO - Empowering Solutions</title>
        <meta
          name="description"
          content="Welcome to Valsco! We provide innovative software products and services to businesses and individuals, tailored to meet their unique needs. Explore our solutions today."
        />
      </Helmet>
      <div>
        {!isLoadingComplete ? (
          <div className="plan">
            <div className="box">
              <video src="tv.mp3"></video>
            </div>
            <div className="text">
              <span className="center sp">V</span>
              <span className="hide sp">A</span>
              <span className="hide sp">L</span>
              <span className="hide sp">S</span>
              <span className="hide sp">C</span>
              <span className="hide sp">O</span>
            </div>
          </div>
        ) : (
          <Intro className={isLoadingComplete ? "show" : "hide"} />
        )}
      </div>
    </>
  );
};
