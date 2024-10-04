import React from "react";
import "./ServiceBody.css";
import { offeredService, faqs } from "./serviceData";
import { useLocation, useNavigate } from "react-router-dom";
import Timer from "./Timer/Timer";
import ServicePageHero from "./ServicePageHero";
import RegistrationForm from "./RegistrationForm";
import { TracingBeam } from "../../../Components/ui/Tracingbeam.tsx";

const ServiceBody = () => {
  const navigate = useNavigate();
  const service_steps = useLocation().state;

  return (
    <>
      {useLocation().pathname === "/Service" ? (
        <ServicePageHero page_data={service_steps} />
      ) : (
        <RegistrationForm page_data={service_steps} />
      )}

      <section className="about-service">
        <TracingBeam >
          {service_steps.data.map((step, i) => (
            <div
              key={i}
              className={`about-service-steps ${i % 2 === 0 ? `even` : `odd`}`}
            >
              <div className="steps-image">
                <img src={step.img} alt={step.title} />
              </div>
              <div className="steps-details">
                <h2 style={{ color: step.color }}>{step.title}</h2>
                <ul>
                  {step.points.map((point, index) => (
                    <li key={index} style={{ color: step.color }}>
                      <span className="arrow" style={{ color: step.color }}>
                        &rarr;
                      </span>{" "}
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </TracingBeam>
      </section>

      <section className="service-offers">
        <button
          className="to_enroll"
          onClick={() => {
            navigate("/RegisterCourse", { state: service_steps });
            window.scroll(0, 0);
          }}
        >
          <h2>Learn to Develop Great Websites</h2>
        </button>
        <div className="promting-offers">
          {offeredService.map((off, index) => (
            <div className="offer-div" key={index}>
              <img src={off.img} alt=" " />
              <h4>{off.title}</h4>
              <p>{off.para}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="FAQ">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <details className="question" key={index}>
            <summary>{faq.ques}</summary>
            <p>{faq.ans}</p>
          </details>
        ))}
      </section>

      <section className="offer-timer">
        <Timer />
        <button
          className="to_enroll to_enroll_btn"
          style={{ margin: "3rem 0" }}
          onClick={() => {
            navigate("/RegisterCourse", { state: service_steps });
            window.scroll(0, 0);
          }}
        >
          <h2>Register Now</h2>
        </button>
        <p className="offer-notice">
          Once the timer hits zero, pricing will be increased to 899.00/-
        </p>
      </section>
    </>
  );
};

export default ServiceBody;