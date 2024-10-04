import React from "react";
import { Link as PGLINK } from "react-router-dom";
import "./refundPage.css";

const RefundPageBody = () => {
  return (
    <>
      <PGLINK
        to="/"
        className="nav-item"
        style={{
          border: "1px solid black",
          position: "absolute",
          top: "1rem",
          width: "fit-content",
          left: "1rem",
          padding: "0.5rem",
        }}
      >
        Home
      </PGLINK>
      <section className="refundPage-container">
        <h1>Cancellation and Refund Policy</h1>
        <p>
          <i>ValsCo Technology Pvt Ltd's Web Development Bootcamp:</i>
        </p>
        <section className="points">
          <h2>Cancellation Period:</h2>
          <p>
            Registrants have the right to cancel their registration within 24
            hours of payment, provided that the bootcamp has not commenced.
          </p>
        </section>
        <section className="points">
          <h2>Bootcamp Cancellation:</h2>
          <p>
            No cancellation fees will be charged if the registration is canceled
            within the specified cancellation period mentioned above. If the
            bootcamp has already commenced, a cancellation fee may apply.
          </p>
        </section>
        <section className="points">
          <h2>Refund Policy:</h2>
          <p>
            If the registration is canceled within the cancellation period, the
            registrant will receive a full refund to their original method of
            payment.
          </p>
          <p>
            If the registration is canceled after the cancellation period but
            before the bootcamp commences, a refund may be issued, subject to
            deduction of any applicable cancellation fee.
          </p>
          <p>Once the bootcamp has commenced, no refunds will be provided.</p>
        </section>
        <section className="points">
          <h2>Process for Cancellation:</h2>
          <p>
            To cancel a registration, participants must contact our customer
            support team via email at support@valsco.com. Our customer support
            team is available Monday to Friday, 9 am to 5 pm.
          </p>
        </section>
        <section className="points">
          <h2>Unforeseen Circumstances:</h2>
          <p>
            ValsCo Technology Pvt Ltd reserves the right to cancel the bootcamp
            or delay its commencement in the event of unforeseen circumstances
            beyond our control, such as technical issues, instructor
            unavailability, or force majeure.
          </p>
        </section>
        <section className="points">
          <h2>Legal Compliance:</h2>
          <p>
            This policy is subject to all applicable local, state, and federal
            laws and regulations governing cancellations and refunds for online
            educational services.
          </p>
        </section>
        <section className="points">
          <h2>Terms Changes:</h2>
          <p>
            ValsCo Technology Pvt Ltd reserves the right to modify this
            cancellation and refund policy at any time without prior notice. Any
            changes will be communicated through email to registered
            participants.
          </p>
        </section>
        <section className="points">
          <h2>Contact Information:</h2>
          <p>
            For inquiries or assistance with registration cancellations, please
            contact our customer support team at support@valsco.com, Monday to
            Friday, 9 am to 5 pm.
          </p>
        </section>
        <section className="points">
          <h2>Arbitration:</h2>
          <p>
            Any disputes arising out of or related to this policy shall be
            resolved through arbitration in accordance with the rules of
            arbitration in India.
          </p>
        </section>
      </section>
    </>
  );
};

export default RefundPageBody;
