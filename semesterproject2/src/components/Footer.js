import React from "react";
import GooglePlay from "../assets/images/googlePlay.png";
import AppStore from "../assets/images/appStore.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-item">
        <div className="footer-item-inner">
          <h5>Products</h5>
          <h6>Lorem ipsum</h6>
          <h6>Lorem ipsum</h6>
          <h6>Lorem ipsum</h6>
          <br />
          <h5>Nailedit.com</h5>
          <h6>
            Nailedit.com is developed by{" "}
            <a href="https//:flexboks.no">Annika Engøy</a>
            <br />
            for Noroff School of Technology and Digital Media as a Semester
            Project 2 assignment{" "}
          </h6>
        </div>
      </div>
      <div className="footer-item">
        <div className="footer-item-inner">
          <h5>Contact us</h5>
          <h6>Lorem ipsum</h6>
          <h6>Lorem ipsum</h6>
          <h6>Lorem ipsum</h6>
          <br />
          <i className="fas fa-envelope">
            <h6 className="contact-item">
              <a href="mailto:post@ireg.com">Post@nailedit.com</a>
            </h6>
          </i>
          <br />
          <i class="fas fa-phone">
            <h6 className="contact-item">
              <a href="tel:">+47 99 234 567</a>
            </h6>
          </i>
        </div>
      </div>
      <div className="footer-item">
        <div className="footer-item-inner">
          <h5>Newsletter</h5>
          <form action="#">
            <div className="form-wrapper">
              <input
                className="newsletter"
                type="text"
                id="epost"
                name="epost"
                placeholder="Submit email adress"
              ></input>
              <button className="register" type="submit">
                Sign Up
              </button>
            </div>
          </form>
          <br />
          <h5>Last ned appen vår</h5>
          <img className="app-icons" src={AppStore} alt="App Store" />
          <img className="app-icons" src={GooglePlay} alt="Google Play" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
