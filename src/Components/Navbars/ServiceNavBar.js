import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet-async";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../Assets/Company_Logo.png";
import { services } from "../../Page_Components/ServicePage/ServicesDisplayPage/servicesData";
const HomeNav = ({ linksList }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <Helmet>
        <title>Valsco Technology - Navigation</title>
      </Helmet>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/"
           style={{
                fontWeight:"600"
              }}
           className="navbar-logo">
            <img src={logo} alt="icon" className="navbar-icon" />
            <h1>VALSCO TECHNOLOGY</h1>
          </NavLink>
          <div className="nav-menu">
            {linksList.map((navItem, index) => (
              <li
                className={
                  navItem.title === "Services"
                    ? "register-navbtn nav-item"
                    : "nav-item"
                }
                key={index}
              >
                {navItem.type === "Link" ? (
                  <Link
                  style={{
                    fontWeight:"600"
                  }}
                 
                    to={navItem.link}
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    {navItem.title}
                  </Link>
                ) : (
                  <NavLink
                  style={{
                    fontWeight:"600"
                  }}
                    to={navItem.link}
                    state={navItem.title === "Services" ? services[0] : {}}
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    {navItem.title}
                  </NavLink>
                )}
              </li>
            ))}
          </div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
      <div className={click ? "mob-nav nav-menu active" : "mob-nav nav-menu"}>
        {linksList.map((navItem, index) => (
          <li className="nav-item" key={index}>
            {navItem.type === "Link" ? (
              <Link
              style={{
                fontWeight:"600"
              }}
                to={navItem.link}
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : " activated")
                }
                onClick={closeMobileMenu}
              >
                {navItem.title}
              </Link>
            ) : (
              <NavLink
              style={{
                fontWeight:"600"
              }}
                to={navItem.link}
                state={navItem.title === "Register" ? services[0] : {}}
                className={({ isActive }) =>
                  "nav-links" + (isActive ? "activated " : "")
                }
                onClick={closeMobileMenu}
              >
                {navItem.title}
              </NavLink>
            )}
          </li>
        ))}
      </div>
    </>
  );
};

export default HomeNav;
