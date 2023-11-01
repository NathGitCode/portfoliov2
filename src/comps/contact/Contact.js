import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <header className="contact-header">
        <h4>CONTACT</h4>
        <h3>Don't be shy, get in touch 😄 </h3>
      </header>
      <div id="contact" className="contact-container">
        <div className="address">
          <h3>Where do i live 🏠</h3>
          <p>Northwich, Cheshire,</p>
          <p>Northwest England</p>
        </div>
        <div className="email">
          <h3>Send me an email 📧</h3>
          <p className="contact-email">
            <a href="mailto:nathstringer@gmail.com">nathstringer@gmail.com</a>
          </p>
        </div>
        <div className="phone">
          <h3>Drop me a text 📱</h3>
          <p>07934891238</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
