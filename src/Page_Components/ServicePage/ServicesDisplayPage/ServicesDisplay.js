import React from "react";
import {  useNavigate } from "react-router-dom";
import "./ServiceDisplay.css";
import { services } from "./servicesData";
import Footer from "../../../Components/Footer/Footer";

import "swiper/css";
import "swiper/css/pagination";

import { CardBody, CardContainer, CardItem } from "../../../Components/ui/Card.tsx";

import { AuroraBackground } from "../../../Components/ui/Aurora.tsx";

const Services = () => {
  const navigate = useNavigate();
 
 

 
  return (
    <>
    <AuroraBackground

    showRadialGradient={false}


    >
    
    <div className="BackroundA">
                 {services.map((service, index) => (
              <CardContainer className="inter-var " >
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-4 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
             { service.title  }
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {service.content}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={service.imgLink}
                    height="800"
                    width="800"  
                    className="h-52   w-full object-cover rounded-xl group-hover/card:shadow-xl " 
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-10"> 
                  <CardItem
                    translateZ={20}
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                  <button
            className="check_it"
            onClick={() => navigate(`/Service`, { state: service })}
            >
            Check it  {"->"}
            </button>
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    <button
                    className="register"
                    onClick={() =>
                      navigate(`/RegisterCourse`, { state: service })
                    }
                  >
                    Register
                  </button>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            )
          )    
}
    </div>
    

      
    
      </AuroraBackground>
      <Footer />
    </>
  );
};

export default Services;




