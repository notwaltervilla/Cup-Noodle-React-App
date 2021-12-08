"use es6";

import React, { useState } from "react";
import photosample from '../imgs/photosample.png'   // In the future, we will need to organize the images in this folder, but for now everything is spread out.
import Button from '../components/Button.js';
import {Link } from "react-router-dom";


const HomePage = () => {

  return (
    <div>
        <div className="container">
          <h1 className="ramen-home-h1">Cup Noodles</h1>
          <p className="ramen-home-p"> A ramen-making machine that makes your favorite late-night food </p>
          <Link to="/order" > <Button color="#879107" text="Make an order"/> </Link> 
          
        </div>
    </div>
    
  );
};

export default HomePage;