import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Homepage() {
  return (
    <>
      <Helmet>
        <title>CoinDone | Home</title>
      </Helmet>
      <Header></Header>
      <section id="HomeSection2">
        <h4 className="title">WHO WE ARE</h4>
        <div className="contents">
          <div className="content ourVision">
            <h3 className="topLine">Our Vision</h3>
            <p>
              CoinDone’s vision is to be the premier alternative crypto
              investments fund in the UAE.
              <br /> <br /> We are committed to providing excellent insight,
              consistency, and customer service to all of our clients.
            </p>
          </div>
          <div className="content service">
            <h3 className="topLine">The Service we provide</h3>
            <p>
              Using proprietary analyses techniques , CoinDone will select
              alt-coin projects that are at the forefront of blockchain
              technology as a whole. These selections will be up and coming
              projects with huge potential in the coming growth of the crypto
              market. <br /> <br /> The industries of interest to CD include
              Decentralized Finance (DeFi), meta-verse projects including gaming
              and virtual workspace projects, staking tokens, real-estate
              related tokens, as well new emerging segments.
            </p>
          </div>
          <div className="content mission">
            <h3 className="topLine">Our Mission</h3>
            <p>
              Our mission is to bring the highest standards for research, risk
              management and transparency to digital asset investing. <br />{" "}
              <br />
              When clients invest with us they know that their funds will be
              deployed responsibly, safely, and ethically to ensure
              a healthy return.
            </p>
          </div>
          <div className="outer__button button__left-right">
            <Link to="/contact-us">
              <div className="text">GET IN TOUCH</div>
            </Link>
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
          &nbsp;
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
