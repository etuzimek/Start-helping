import React, { useState } from "react";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const _errors = [];

        if (name.length < 2) {
            _errors.push("Name should be at least 2 characters long.");
        }

        if (email.length < 3 || email.indexOf("@") === -1) {
            _errors.push("Email should be valid.");
        }

        if (message.length < 120) {
            _errors.push("Message should be at least 120 characters long.");
        }

        setErrors(_errors);
        setSuccess(false);
        if (_errors.length > 0) {
            return false;
        }

        const obj = {
            name,
            email,
            message
        };

        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Błąd sieci!");
                }
            })
            .then(data => {
                if (data.status === "success") {
                    setSuccess(true);
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div id="contact" className="contact">
            <div className="contact__image">
                <div className="opacityBackground">
                    <div className="contact__right">
                        <p className="contact__title" >Skontaktuj się z nami</p>
                        <center>
                            <div className="header__decoration" />
                        </center>
                        <form onSubmit={handleSubmit}>
                            <div className="contact__name">
                                <label>
                                    Wpisz swoje imię
                                    <br />
                                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                                </label >
                                <label>
                                    Wpisz swój email
                                    <br />
                                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                                </label>
                            </div>
                            <label style={{ fontWeight: "bold" }}>
                                Wpisz swoją wiadomość
                            </label>
                            <br />
                            <textarea style={{ width: "440px", height: "100px", backgroundColor: "transparent", borderBottom: "1px solid grey" }} value={message} onChange={e => setMessage(e.target.value)} />
                            <button className="contact__button" type="submit">Wyślij</button>
                        </form>
                        {success && <h2>Form sent!</h2>}
                        {errors.map(error => <p key={error}>{error}</p>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;