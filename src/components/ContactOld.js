import React from "react";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// const validateEmail = (email) => {
//   return email.match(
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   );
// };

// const validate = () => {
//   const result = ('#result');
//   const email = ('#email').val();
//   result.text('');

//   if (validateEmail(email)) {
//     result.text(email + ' is valid :)');
//     result.css('color', 'green');
//   } else {
//     result.text(email + ' is not valid :(');
//     result.css('color', 'red');
//   }
//   return false;
// }

// ('#email').on('input', validate)

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
          <label className="contact__details" for="email">Wpisz swój email</label>
            <input id="email" />
            <h2 id="result"></h2>
        </form>
        <form className="contact__forms">
          <label className="contact__massage">Wpisz swoją wiadomość</label>
          <input type="textarea" className="contact__form" />
          <button className="contact__button">Wyślij</button>
        </form>
      </div>
    </a>
  );
}

export default Contact;
