import React from "react";
import "./Products.css";
import Iphone from "../../../Assets/Product_Imgs/Mockup_1.png";
import Client from "../../../Assets/Product_Imgs/Mockup_2.png";
import Login from "../../../Assets/Product_Imgs/Mockup_3.png";
import { Helmet } from "react-helmet-async";

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Products - Valsco</title>
        <meta
          name="description"
          content="Discover our range of innovative products designed to enhance your experience. For all your software solutions, explore the future with Valsco."
        />
        <link rel="canonical" href="/products" />
      </Helmet>
      <section
        id="products"
        className="hero_products"
        onClick={() => {
          window.location.href = "http://www.jurident.com/";
        }}
      >
        <div className="iphone1">
          <img className="mock1" src={Iphone} alt="" />
        </div>
        <div className="iphone2">
          <img className="mock1" src={Client} alt="" />
        </div>
        <div className="iphone3">
          <img className="mock1" src={Login} alt="" />
        </div>
      </section>
    </>
  );
};

export default Products;
