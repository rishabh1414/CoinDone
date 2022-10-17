import React, { useState } from "react";
import { Link } from "react-router-dom";
const logo = new URL("../../public/images/logo.png", import.meta.url);

export default function Navbar() {
  const [btnState, setBtnState] = useState(false);
  const [navbar, setNavbar] = useState(false);

  function toggleHum() {
    setBtnState((btnState) => !btnState);
  }
  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  let toggleClass = btnState ? "open" : null;
  let activeClass = navbar ? "active" : null;
  return (
    <>
      <nav className={activeClass}>
        <div className="logo  ">
          <img src={logo} alt="logo" />
          <div className="logoName">
            <h1>COINDONE</h1>
            <p>Digital Asset Management</p>
          </div>
        </div>
        <div className="humberger" onClick={toggleHum}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <ul
          className={`link-effect-4 nav-links ${toggleClass}`}
          id="link-effect-4"
        >
          <Link className="a" to="/" data-hover="Home">
            Home
          </Link>
          <Link className="a" to="/team" data-hover="Our Team">
            Our Team
          </Link>
          <Link className="a" to="/contact-us" data-hover="Contact Us">
            Contact Us
          </Link>
        </ul>
      </nav>
    </>
  );
}
