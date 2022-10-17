import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="Header">
      <Navbar></Navbar>
      <div className="heading">
        <h2>The Premier Alternative Crypto Investments Fund in the UAE</h2>
        <p>
          We intend to filter through the noise found in the crypto space, and
          pick low-cap gems that will handsomely reward investors.
        </p>
        {/* <button className="button">
          <Link to="/contact-us">GET IN TOUCH</Link>
          <span class="material-symbols-outlined">arrow_forward</span>
        </button> */}
        <div className="outer__button button__left-right">
          <Link to="/contact-us">
            <div className="text">GET IN TOUCH</div>
          </Link>
          <span className="material-symbols-outlined">arrow_forward</span>
        </div>
        &nbsp;
      </div>
    </header>
  );
}
