import React from "react";
import GooglePlay from "../assets/images/googlePlay.png";
import AppStore from "../assets/images/appStore.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-item">
        <div className="footer-item-inner">
          <h5>Produkter & tjenester</h5>
          <h6>Lorem ipsum</h6>
          <h6>Lorem ipsum</h6>
          <h6>Lorem ipsum</h6>
          <br />
          <h5>iReg.no</h5>
          <h6>
            iReg.no er utviklet av{" "}
            <a href="https//:flexboks.no">Flexboks AS.</a>
            <br />
            Flexboks AS er et programmerings- <br />
            og utviklingsselskap lokalisert i Mosjøen.
          </h6>
        </div>
      </div>
      <div className="footer-item">
        <div className="footer-item-inner">
          <h5>Kontakt oss</h5>
          <h6>Lorem ipsum</h6>
          <h6>Lorem ipsum</h6>
          <h6>Lorem ipsum</h6>
          <br />
          <i className="fas fa-envelope">
            <h6 className="contact-item">
              <a href="mailto:post@ireg.com">Post@ireg.no</a>
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
          <h5>Nyhetsbrev</h5>
          <form action="#">
            <div className="form-wrapper">
              <input
                className="newsletter"
                type="text"
                id="epost"
                name="epost"
                placeholder="Skriv inn epost adresse"
              ></input>
              <button className="register" type="submit">
                Registrer
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
