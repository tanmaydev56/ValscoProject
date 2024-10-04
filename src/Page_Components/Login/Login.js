import React from "react";
import { Helmet } from "react-helmet-async";
import { auth, provider } from "../../Firebase_Config/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import loginBanner from "../../Assets/LoginPage_Assets/login_banner.png";
import googleIcon from "../../Assets/LoginPage_Assets/google.png";
import "./Login.css";
const Login = (props) => {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("authenticated", true);
        props.setAuthenticated(true);
        localStorage.setItem(
          "alertMsg",
          "You have been successfully logged in!"
        );
        props.setAlertMsg("You have been successfully logged in!");
        localStorage.setItem("alertColor", "lightgreen");
        props.setAlertColor("lightgreen");
        navigate("/BlogHome");
      })
      .catch((error) => {
        console.log("Caught error Popup closed");
      });
  };
  return (
    <>
      <Helmet>
        <title>Login - VALSCO Blog</title>
        <meta
          name="description"
          content="Login to create your own blogs and join the Valsco Technology blogging community."
        />
      </Helmet>
      <main className="login-body">
        <h3 className="login-head">Login to create your own blogs</h3>
        <div className="login-div">
          <img src={loginBanner} id="login-img" alt="login-banner" />
          <h1>Login With Google</h1>
          <button className="login-btn" onClick={signInWithGoogle}>
            <img
              src={googleIcon}
              id="google-img"
              alt="google-banner"
              className="mx-2"
            />
          </button>
        </div>
      </main>
    </>
  );
};

export default Login;
