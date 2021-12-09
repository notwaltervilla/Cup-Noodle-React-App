"use es6";

import React from "react";
import CTAButton from "../components/CTAButton.js";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="container-home">
        <h1 className="ramen-home-h1">Cup Noodles</h1>
        <p className="ramen-home-p">
          {" "}
          A ramen-making machine that makes your favorite late-night food{" "}
        </p>
        <Link to="/order">
          {" "}
          <CTAButton color="879107">Make an order 🍜</CTAButton>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
