import React from "react";
import UnstyledLink from "./UnstyledLink";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/order">Order</Link>
    </div>
  );
}

export default NavBar;
