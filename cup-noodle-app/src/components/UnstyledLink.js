"use es6";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const UnstyledLink = ({ children, url }) => {
  const style = {
    textDecoration: "none",
  };

  const target = `/${url}`;

  return (
    <Link style={style} to={target}>
      {children}
    </Link>
  );
};

export default UnstyledLink;
