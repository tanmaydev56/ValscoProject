import React, { useState, useEffect } from "react";
import "../Footer/Footer.css";
import { createDoc } from "../../Firebase_Config/firebaseConfig";
import axios from "axios";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
const backendURL = "https://mailing-backend.onrender.com";

const CheckOutForm = () => {
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
    course: "",
  });
  const location = useLocation();
  const [msg, setMsg] = useState("");
  const [sending, setSending] = useState(false);
  const [isValid, setIsValid] = useState(true);
  // const [isSuccess, setIsSuccess] = useState(false);

 

  const handleOnChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
    const inputs = document.querySelectorAll("input");
    const validity = [...inputs].every((input) => input.checkValidity());
    setIsValid(!validity);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      newContact.name = newContact.name.trim();
      newContact.email = newContact.email.trim();
      newContact.company = newContact.company.trim();
      let savedEmail = newContact.email;
      let savedName = newContact.name;
      axios
        .post(backendURL, {
          name: savedName,
          email: savedEmail,
          num: newContact.number,
          company: newContact.company,
        })
        .then(function (res) {
          createDoc(newContact);
          setIsValid(true);
          setMsg("Message Sent Successfully. We will be in touch with you soon.");
          setSending(false);
          // setIsSuccess(true);
          setTimeout(() => {
            setNewContact({ name: "", email: "", number: "", company: "", course: "" });
          }, 3000);
        })
        .catch(function (error) {
          setMsg(`The Following Error Occurred: ${error.message}`);
          setSending(false);
        });
    } catch (error) {
      setSending(false);
      setMsg(`The Following Error Occurred: ${error.message}.\nKindly Try Again!`);
    }
  };
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const course = params.get('course');
    if (course) {
      setNewContact((prevContact) => ({ ...prevContact, course }));
    }
  }, [location.search]);

  return (
    <>
      <section id="contactuspage" className={`contact-section flex `}>
        <div className="subheadings-1">
          <span>FUEL.</span>
          <span>ELEVATE.</span> <span>IGNITE YOUR</span>
          <span>SW SOLUTIONS.</span>
        </div>
     
        <form 
          onSubmit={handleFormSubmit} 
          className="bg-black border shadow-lg p-8 rounded-lg max-w-md mx-auto space-y-6"
        >
          <h1 className="text-gray-900 text-4xl font-semibold mb-4 text-center">
            Get Your Quotation
          </h1>

        
          {msg && <p className="text-green-500 text-center">{msg}</p>}

          <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="text-sm text-gray-600 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              onChange={handleOnChange}
              value={newContact.name}
              placeholder="Your Name"
              name="name"
              required
              pattern="^[A-Za-z\s.]{3,50}$"
              className="p-3 bg-black border border-gray-300 rounded-md focus:outline-none  text-red"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm text-gray-600 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={handleOnChange}
              value={newContact.email}
              placeholder="Your Email"
              name="email"
              required
              className="p-3 border border-gray-300 bg-black rounded-md focus:outline-none  text-black"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="number" className="text-sm text-gray-600 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              id="number"
              onChange={handleOnChange}
              value={newContact.number}
              placeholder="Your Phone Number"
              name="number"
              required
              pattern="^(?:\\+91|91|0)?[6-9]\\d{9}$"
              className="p-3 border border-gray-300 rounded-md bg-black focus:outline-none"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="company" className="text-sm text-gray-600 font-medium">
              Purpose
            </label>
            <input
              type="text"
              id="company"
              onChange={handleOnChange}
              value={newContact.company}
              placeholder="Your Company/Organization"
              name="company"
              required
              className="p-3 border border-gray-300 rounded-md focus:outline-none bg-black"
            />
          </div>

          <div className="flex flex-col space-y-1">
      <label htmlFor="course" className="text-sm font-medium">
        Selected Service
      </label>
      <select
        id="course"
        onChange={handleOnChange}
        value={newContact.course}
        name="course"
        required
        className="p-3 bg-black border-gray-300 rounded-md focus:outline-none border"
      >
        <option value="" disabled>Select a Service</option>
        <option value="WebDev">Web Development</option>
        <option value="AppDev">App Development</option>
        <option value="UI-UX">UI/UX Design</option>
      </select>
    </div>

          <button 
            type="submit" 
            className="w-full cursor-pointer inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            disabled={!isValid || sending} 
          >
            {sending ? "Sending..." : "Get Service"}
          </button>

        </form>

        
<div className="contact-container">
          <div className="contact-Details">
            <div className="subheadings-2">
              <span>Have an Idea?</span>
              <span>Tell us about it!</span>
            </div>
            <div className="address">
              <a href="mailto:connect@valscotech.com">connect@valscotech.com</a>
              <p>
                J-3 SHATABDI ENCLAVE<br />
                NOIDA, UTTAR PRADESH 201301
              </p>
              <div className="policies">
                <Link to="/PrivacyPage">
                  <span>Privacy Policy</span>
                </Link>
                <Link to="/RefundPolicy">
                  <span>Refund and Cancellation</span>
                </Link>
                <Link to="/T&C">
                  <span>Terms and Conditions</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="social-handles">
            <i className="fa fa-twitter fa-4x icon-3d" style={{ fontSize: "48px" }}></i>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook fa-4x icon-3d" style={{ fontSize: "48px" }}></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram fa-4x icon-3d" style={{ fontSize: "48px" }}></i>
            </a>
            <a href="https://www.linkedin.com/company/valscotech/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin fa-4x icon-3d" style={{ fontSize: "48px" }}></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOutForm;


