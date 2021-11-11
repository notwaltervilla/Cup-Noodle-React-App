import React from "react";
import UnstyledLink from "./UnstyledLink";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Link to="/">Home</Link>

      <Link to="/order">Order</Link>
    </>
  );
}

export default NavBar;