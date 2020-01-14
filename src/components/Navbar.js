import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Catalog">Catalog</Link>
      <Link to="/Where">Where</Link>
    </nav>
  );
};

export default Navbar;
