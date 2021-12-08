import React from "react";
import UnstyledLink from "./UnstyledLink";
import { Link } from "react-router-dom";

function NavBar() {
  const style = {
    color: "#ffffff",
    backgroundColor: "#879107",
    padding: "auto",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "20px",
    boxShadow: "0px 5px #000000",
  };

  return (
    <>
      <div style={style}>
        <div style={{ padding: "10px" }}>
          <UnstyledLink url="/">Home</UnstyledLink>
        </div>
        <div style={{ padding: "10px" }}>
          <UnstyledLink url="/order">Order</UnstyledLink>
        </div>
      </div>
    </>
  );
}

export default NavBar;
