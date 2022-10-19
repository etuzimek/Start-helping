import React from "react";

function Contact() {
  return (
    <a name="contact" className="contact">
      <div className="contact__image" />
      <div className="contact__right">
        <p style={{ fontSize: 38 }}>Skontaktuj się z nami</p>
        <center>
          <div className="header__decoration" />
        </center>
        <form className="contact__name">
          <label className="contact__details">Wpisz swoje imię
            <input type="text" className="contact__form" /></label>
          <label className="contact__details">Wpisz swój email
            <input type="email" className="contact__form" /></label>
        </form>
        <form className="contact__forms">
          <label className="contact__massage">Wpisz swoją wiadomość
          <input type="textarea" className="contact__form" /></label>
          <button className="contact__button">Wyślij</button>
        </form>
      </div>
    </a>
  );
}

export default Contact;
