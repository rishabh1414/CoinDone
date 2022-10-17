import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    let username = e.target.user_name.value;
    let email = e.target.user_email.value;
    let message = e.target.message.value;
    if (username.length < 3 || email.length < 3 || message.length < 3) {
      console.log("less");
      toast.error("Please Enter Valid Data", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: 0,
        theme: "dark",
      });
      username = "";
    } else {
      emailjs
        .sendForm(
          "service_pyfj7j1",
          "template_950cngu",
          form.current,
          "yg3mqdOh-7OYHfCLy"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Message Sent SucessFully", {
              position: "bottom-right",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: 0,
              theme: "dark",
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div>
      <Helmet>
        <title>CoinDone | Contact</title>
      </Helmet>
      <Navbar></Navbar>
      <section id="contact">
        <div className="mainContact">
          <div className="contactForm">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your Name*"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Enter a valid email*"
              />
              <input
                type="text"
                name="phoneNo"
                placeholder="Enter Your Phone no. (optonal)"
              />
              <textarea name="message" placeholder="Enter Your message*" />
              <div className="outer__button button__left-right">
                <button type="submit" className="text">
                  Send Message
                </button>

                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
              &nbsp;
            </form>
          </div>
          <div className="right">
            <h4>We would love to hear from you!</h4>
            <h3>Contact Us</h3>
            <p>
              Right now our team is running the show . Any feedback you provide,
              any suggestions you have and any new idea you would like to share
              is appreciated. Please don't hesitate to write to us.
            </p>
          </div>
        </div>
      </section>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}
