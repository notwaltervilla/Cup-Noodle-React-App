"use es6";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const UnstyledLink = ({ children, url }) => {
  const [linkColor, setLinkColor] = useState("#ffffff");

  const style = {
    textDecoration: "none",
    color: linkColor,
  };
  const target = `${url}`;

  const updateLinkColor = (active) => {
    active ? setLinkColor("#000000") : setLinkColor("#ffffff");
  };

  return (
    <Link
      style={style}
      to={target}
      onMouseEnter={() => updateLinkColor(true)}
      onMouseLeave={() => updateLinkColor(false)}
    >
      {children}
    </Link>
  );
};

export default UnstyledLink;
