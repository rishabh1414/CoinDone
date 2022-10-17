import React from "react";
import { Link } from "react-router-dom";

const logo01 = new URL("../../public/images/logo01.png", import.meta.url);

export default function Footer() {
  return (
    <footer>
      <div className="top">
        <div className="topLeft">
          <img src={logo01} alt="" />
          <h3>
            CoinDone's vision is to be the premier alternative crypto
            investments fund in the UAE. CoinDone is committed to providing
            excellent insight, consistency, and customer service to all of our
            clients.
          </h3>
          <div className="address">
            <p>64 North Row, 5th Floor</p>
            <p>Dubai,UAE</p>
          </div>
        </div>
        <div className="topRight">
          <p>Useful Links</p>
          <div className="useFulLinks">
            <Link to="/" data-hover="Our Team">
              Home
            </Link>
            <Link to="/team" data-hover="Our Team">
              Our Team
            </Link>
            <Link to="/contact-us" data-hover="Our Team">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottomLeft">
          <Link>Term and Privacy &#8482;</Link>
          <Link>Disclaimer</Link>
        </div>
        <div className="bottomRight">
          <p> &#169; CoinDone Digital assets management</p>
          <p>2022 </p>
        </div>
      </div>
    </footer>
  );
}
