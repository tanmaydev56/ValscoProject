import React, { useState } from "react";

import { default as axios } from "axios";
import toast from "react-hot-toast";

const RegistrationForm = ({ page_data }) => {
  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    studyField: "",
    city: "",
    birthday: "",
    nationality: "",
    credibility: "",
  });

  const data = {
    name: `${details.fname} + ${details.lname}`,
    amount: page_data.amount,
    number: `${details.phone}`,
    MUID: "MUID" + Date.now(),
    transactionId: "T" + Date.now(),
  };

  // const makePayment = async (e) => {
  //   e.preventDefault();

  //   const transactionid = "Tr-" + uuidv4().toString(36).slice(-6);

  //   console.log(process.env.MERCHANT_ID);
  //   const payload = {
  //     merchantId: "PGTESTPAYUAT",

  //     // merchantId: "PGTESTPAYUAT",
  //     merchantTransactionId: transactionid,
  //     merchantUserId: "MUID-" + uuidv4().toString(36).slice(-6),
  //     amount: 10000,
  //     redirectUrl: `http://localhost:3000/api/status/${transactionid}`,
  //     redirectMode: "POST",
  //     callbackUrl: `http://localhost:3000/api/status/${transactionid}`,
  //     mobileNumber: "9999999999",
  //     paymentInstrument: {
  //       type: "PAY_PAGE",
  //     },
  //   };

  //   const dataPayload = JSON.stringify(payload);
  //   console.log(dataPayload);

  //   // const dataBase64 = Buffer.from(dataPayload).toString("base64");
  //   const dataBase64 = btoa(dataPayload);

  //   console.log(dataBase64);

  //   const fullURL =
  //     dataBase64 + "/pg/v1/pay" + "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
  //   const dataSha256 = sha256(fullURL);

  //   const checksum = dataSha256 + "###" + 1;
  //   console.log("c====", checksum);

  //   const UAT_PAY_API_URL =
  //     "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

  //   const response = await axios.post(
  //     UAT_PAY_API_URL,
  //     {
  //       request: dataBase64,
  //     },
  //     {
  //       headers: {
  //         accept: "application/json",
  //         "Content-Type": "application/json",
  //         "X-VERIFY": checksum,
  //       },
  //     }
  //   );

  // const redirect = response.data.data.instrumentResponse.redirectInfo.url;
  // router.push(redirect)

  // window.location.href = redirect; //

  // const options = {
  //   method: "POST",
  //   url: UAT_PAY_API_URL,
  //   headers: {
  //     accept: "application/json",
  //     "Content-Type": "application/json",
  //     "X-VERIFY": checksum,
  //   },
  //   data: {
  //     request: dataBase64,
  //   },
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //     return response.redirect(
  //       response.data.data.instrumentResponse.redirectInfo.url
  //     );
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  // };

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbxRs0TBU2v9IwBGlFCqoU6e1umgglxO83PAmPa-uYlBu6tLe8sBWLxZpeokyzntZow/exec";
  // const scriptUrl =
  //   "https://script.google.com/macros/s/AKfycbxojnSqIbdvfVxUIjsn0hWSY6u-DacL78zDBkQJxqOzsvRf8Wf1WCMjlswbJF33Rag/exec";

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Handling payment gateway
  //   axios
  //     .post("http://localhost:5000/api/payment", {
  //       ...data,
  //     })
  //     // .post("api/payment")
  //     .then((res) => {
  //       console.log(res.data);
  //       window.location.href = res.data;

  //     })
  //     .catch((error) => {
  //       // setLoading2(false);
  //       console.error(error);
  //     });

  //   const formData = new FormData();
  //   for (const key in details) {
  //     formData.append(key, details[key]);
  //   }

  //   try {
  //     const response = await fetch(scriptUrl, {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (response.ok) {
  //       // Handle successful response (e.g., show a success message or redirect)
  //       // setDetails({
  //       //   fname: "",
  //       //   lname: "",
  //       //   phone: "",
  //       //   email: "",
  //       //   studyField: "",
  //       //   city: "",
  //       //   birthday: "",
  //       //   nationality: "",
  //       //   credibility: "",
  //       // });
  //       toast.success("Form successfully submitted 🎉");

  //       console.log("Form submitted successfully");
  //     } else {
  //       // Handle error response (e.g., show an error message)
  //       console.error("Error submitting form");
  //     }
  //   } catch (error) {
  //     // Handle fetch error
  //     console.error("Error:", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // axios
    //   .post("http://localhost:5000/api/payment", { ...data })
    //   // .post("api/payment")
    //   .then((res) => {
    //     setTimeout(() => {
    //       // setLoading2(false);
    //     }, 1500);
    //   })
    //   .catch((error) => {
    //     // setLoading2(false);
    //     console.error(error);
    //   });

    try {
      // Make a POST request to the payment API
      const paymentResponse = await axios.post(
        // "http://localhost:5000/api/payment",
        "https://phone-pay-payment-gateway-node-js.vercel.app/api/payment",
        {
          ...data,
        }
      );

      // If payment request is successful, redirect to the received URL
      if (paymentResponse.status === 200) {
        console.log(paymentResponse.data);
        window.location.href = paymentResponse.data.redirectUrl; // Assuming the server sends back the redirect URL
      } else {
        // Handle payment request error
        console.error("Payment request failed");
      }
    } catch (paymentError) {
      // Handle payment request error
      console.error("Payment request error:", paymentError);
    }

    // After handling payment, continue with form submission
    const formData = new FormData();
    for (const key in details) {
      formData.append(key, details[key]);
    }

    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Handle successful response (e.g., show a success message or redirect)
        toast.success("Form successfully submitted 🎉");
        console.log("Form submitted successfully");
      } else {
        // Handle error response (e.g., show an error message)
        console.error("Error submitting form");
      }
    } catch (error) {
      // Handle fetch error
      console.error("Error:", error);
    }
  };

  return (
    <section className="course-register-form">
      <h2>Welcome</h2>
      <p>
        Fill in your correct and UP-TO-DATE details so that we may contact you
        via email on further process
      </p>
      <form onSubmit={handleSubmit}>
        <div className="Std-Name">
          <div className="input-container">
            <input
              required
              type="text"
              name="fname"
              id="fname"
              placeholder="Your name"
              value={details.fname}
              onChange={(e) =>
                setDetails((prev) => {
                  return { ...prev, fname: e.target.value };
                })
              }
            />
            <label htmlFor="fname">
              First Name <span>*</span>
            </label>
          </div>
          <div className="input-container">
            <input
              required
              type="text"
              name="lname"
              id="lname"
              placeholder="Your last name"
              value={details.lname}
              onChange={(e) =>
                setDetails((prev) => {
                  return { ...prev, lname: e.target.value };
                })
              }
            />
            <label htmlFor="lname">
              Last Name <span>*</span>
            </label>
          </div>
        </div>
        <div className="input-container">
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="yourmail@gmail.com"
            value={details.email}
            onChange={(e) =>
              setDetails((prev) => {
                return { ...prev, email: e.target.value };
              })
            }
          />
          <label htmlFor="email">
            Email <span>*</span>
          </label>
        </div>
        <div className="input-container">
          <input
            required
            type="text"
            name="phone"
            id="phone"
            value={details.phone}
            onChange={(e) =>
              setDetails((prev) => {
                return { ...prev, phone: e.target.value };
              })
            }
          />
          <label htmlFor="studyField">
            Phone Number <span>*</span>
          </label>
        </div>
        <div className="input-container">
          <input
            required
            type="text"
            name="studyField"
            id="studyField"
            value={details.studyField}
            onChange={(e) =>
              setDetails((prev) => {
                return { ...prev, studyField: e.target.value };
              })
            }
          />
          <label htmlFor="studyField">
            Field of Study <span>*</span>
          </label>
        </div>
        <div className="input-container">
          <input
            required
            type="text"
            name="city"
            id="city"
            placeholder="Select city"
            value={details.city}
            onChange={(e) =>
              setDetails((prev) => {
                return { ...prev, city: e.target.value };
              })
            }
          />
          <label htmlFor="city">
            City <span>*</span>
          </label>
        </div>
        <div className="input-container">
          <input
            required
            type="date"
            name="birthday"
            id="birthday"
            value={details.birthday}
            onChange={(e) =>
              setDetails((prev) => {
                return { ...prev, birthday: e.target.value };
              })
            }
          />
          <label htmlFor="birthday">
            Birthdate <span>*</span>
          </label>
        </div>
        <div className="input-container">
          <input
            required
            type="text"
            name="nationality"
            id="nationality"
            placeholder="Your Nationality"
            value={details.nationality}
            onChange={(e) =>
              setDetails((prev) => {
                return { ...prev, nationality: e.target.value };
              })
            }
          />
          <label htmlFor="nationality">
            Nationality <span>*</span>
          </label>
        </div>
        <div className="input-container condition-check">
          <input
            type="checkbox"
            name="credibility"
            required
            id="credibility"
            value={details.credibility}
            onChange={(e) =>
              setDetails((prev) => {
                return { ...prev, credibility: e.target.value };
              })
            }
          />
          <label htmlFor="credibility">
            I vouch that all the information i have filled above is completely
            true and Proceed to Payment
          </label>
        </div>
        <button type="submit">Register @ {page_data.amount}</button>
      </form>
    </section>
  );
};

export default RegistrationForm;
