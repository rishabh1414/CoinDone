import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const profileImg = new URL("../../public/images/demoimg.jpeg", import.meta.url);

export default function Team() {
  return (
    <div>
      <Helmet>
        <title>CoinDone | Team</title>
      </Helmet>
      <Navbar></Navbar>
      <section id="team">
        <div className="cover">
          <h3>MEET THE TEAM</h3>
          <div className="teamBox teamBox1 ">
            <img src={profileImg} alt="" />
            <div className="teamcontent teamcontent1">
              <h4>
                Tushar Gupta <span className="teamTitle">Partner</span>
              </h4>
              <p>
                Sandeep works closely with our managers across the Falcon
                platform, providing and implementing enhanced risk management
                and oversight. Sandeep has 15 years of experience in
                quantitative risk management and due diligence across
                alternative investments focusing on hedge funds, liquid
                alternatives and UCITS.
              </p>
            </div>
          </div>
          <div className="teamBox teamBox2 ">
            <img src={profileImg} alt="" />

            <div className="teamcontent teamcontent2">
              <h4>
                Tushar Gupta <span className="teamTitle">Partner</span>
              </h4>
              <p>
                Sandeep works closely with our managers across the Falcon
                platform, providing and implementing enhanced risk management
                and oversight. Sandeep has 15 years of experience in
                quantitative risk management and due diligence across
                alternative investments focusing on hedge funds, liquid
                alternatives and UCITS.
              </p>
            </div>
          </div>
          <div className="teamBox teamBox3 ">
            <img src={profileImg} alt="" />

            <div className="teamcontent teamcontent3">
              <h4>
                Tushar Gupta <span className="teamTitle">Partner</span>
              </h4>
              <p>
                Sandeep works closely with our managers across the Falcon
                platform, providing and implementing enhanced risk management
                and oversight. Sandeep has 15 years of experience in
                quantitative risk management and due diligence across
                alternative investments focusing on hedge funds, liquid
                alternatives and UCITS.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
