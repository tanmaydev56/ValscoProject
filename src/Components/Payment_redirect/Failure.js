import React from "react";
import { Link } from "react-router-dom";
import failureImg from "../../Assets/Payment_Assets/error_illustration.jpg";
const Failure = () => {
  return (
    <section
      className="payment_container"
      style={{ backgroundColor: "#F9F9EFff" }}
    >
      <div className="illustation_container">
        <img src={failureImg} alt="" />
      </div>
      <h1>oops! payment failed</h1>
      <h2>something went wrong try again later</h2>
      <Link to="/Courses">Back to Courses</Link>
    </section>
  );
};

export default Failure;
