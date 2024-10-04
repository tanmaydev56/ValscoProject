import React from "react";
import "./success.css";
import succesImg from "../../Assets/Payment_Assets/success_illustration.png";
const Success = () => {
  return (
    <>
      <section className="payment_container">
        <h1>Congratulations 🎉</h1>
        <h2>
          Course Purchased Successfully! <br />
          -- For Further Updates --
        </h2>
        <div className="illustation_container">
          <img src={succesImg} alt="Error in loading illustration" />
        </div>
        <a href="https://chat.whatsapp.com/J8hDrhp50Q570ICUaChfad">
          Join Whatsapp
        </a>
      </section>
    </>
  );
};

export default Success;
