import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
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
  let icon = btnState ? "openicon" : null;
  let cross = btnState ? "line1" : null;
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
          <div className={`line ${cross}`}></div>
          <div className={`line ${cross}`}></div>
          <div className={`line ${cross}`}></div>
        </div>

        <ul
          className={`link-effect-4 nav-links ${toggleClass}`}
          id="link-effect-4"
        >
          <div className="links">
            <Link className="a" to="/" data-hover="Home">
              Home
            </Link>
            <Link className="a" to="/team" data-hover="Our Team">
              Our Team
            </Link>
            <Link className="a" to="/contact-us" data-hover="Contact Us">
              Contact Us
            </Link>
          </div>
          <div className={`close ${icon}`}>
            <div className="navicon">
              <i>
                <FaInstagram />
              </i>
              <i>
                <FaTwitter />
              </i>
              <i>
                <FaLinkedinIn />
              </i>
            </div>
            <p> &#169; CoinDone Digital assets management</p>
          </div>
        </ul>
      </nav>
    </>
  );
}
