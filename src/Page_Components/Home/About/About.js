import React from "react";
import { Helmet } from "react-helmet-async";
import AB_DP from "../../../Assets/Profile_Imgs/Ayan.jpeg";
import SA_DP from "../../../Assets/Profile_Imgs/Sanidhya.jpeg";
import SJ_DP from "../../../Assets/Profile_Imgs/Srishti.jpeg";
import About_Dummy from "../../../Assets/HomePage_Assets/About_dummy.jpeg";
import "./About.css";
import "react-phone-number-input/style.css";

const About = () => {
  return (
    <>
      <Helmet>
        <title>VALSCO</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <section id="about">
        <h2>Who we are</h2>
        <div className="moto-details">
          <img src={About_Dummy} alt="About us banner" className="moto-img" />
          <div className="moto-desc">
            <h3>Our People Come First</h3>
            <p className="lg_scr">
              Valsco specializes in developing custom software solutions
              tailored to meet the unique needs of clients, recognizing the
              significant decision businesses make when investing in software.
              Beyond software development, we offer comprehensive services
              encompassing consulting, training, and support to ensure clients
              maximize the benefits of their visions. With a focus on innovation
              and development, we continually explore new technologies, methods,
              and processes to create software solutions that are efficient,
              effective, and user-friendly. Simultaneously, we prioritize
              improving our products, processes, and services through regular
              evaluations and identification of areas for enhancement. Our
              commitment to continuous improvement ensures our company
              consistently delivers the highest quality, providing maximum value
              to our customers. The team, consisting of experienced developers,
              designers, and project managers, collaborates closely with clients
              to ensure that their software solutions not only meet
              user-friendly standards but also exhibit efficiency and
              effectiveness.
            </p>
            <p className="mb_scr">
              At Valsco , we specialize in crafting custom software solutions
              tailored to our clients' unique needs. Our services extend beyond
              development ,encompassing consulting, training, and support to
              ensure our clients achieve their visions.
              <hr />
              Innovation is our hallmark, as we continuously explore new
              technologies to create efficient, user-friendly solutions.
              <hr />
              With a team of experienced developers, designers, and project
              managers, we excel in website development, mobile applications,
              personalized software, and more. Our commitment to improvement
              guarantees high-quality solutions that deliver maximum value.
            </p>
          </div>
        </div>
      </section>
      <section className="members">
        <div className="member-card">
          <div className="member-img">
            <img src={AB_DP} className="member-dp" alt="y" />
          </div>
          <div className="member-desc">
            <h4>Ayan Bhowal</h4>
            <h5>Co-founder</h5>
            <p>
              Ayan Bhowal is our approachable, dependable, and vastly talented
              Director. With his composed and collected demeanor and persistent
              drive, Valsco is positioned to prosper and thrive.
            </p>
          </div>
        </div>
        <div className="member-card">
          <div className="member-img">
            <img src={SA_DP} className="member-dp" alt="y" />
          </div>
          <div className="member-desc">
            <h4>Sanidhya Agarwal</h4>
            <h5>Founder</h5>
            <p>
              Sanidhya Agarwal, our Managing Director, has amazing leadership
              qualities and a very advanced and holistic vision for Valsco. With
              his keen eye for detail and striving for perfection.
            </p>
          </div>
        </div>
        <div className="member-card">
          <div className="member-img">
            <img src={SJ_DP} className="member-dp" alt="y" />
          </div>
          <div className="member-desc">
            <h4>Srishti Jain</h4>
            <h5>Co-Founder</h5>
            <p>
              Srishti Jain, our Director, is dependable, resourceful and always
              ready to take up challenges. With an amazing team spirit, she
              brings to the Valsco table amazing skills and proficiency.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
