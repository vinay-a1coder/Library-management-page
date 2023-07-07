import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link">Product</Link>
        </li>
        <li className="nav-item">
          <a href="https://64849c7118fa9475394ad596--warm-daffodil-c7427c.netlify.app/" 
           className="nav-link" target="_blank" rel="noopener noreferrer">Contact</a>
          {/* <Link to="#" className="nav-link">Contact</Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
