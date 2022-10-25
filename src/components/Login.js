import React, { useState } from "react";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const _errors = [];

        if (email.length < 3 || email.indexOf("@") === -1) {
            _errors.push("Email should be valid.");
        }

        if (password.length < 6) {
            _errors.push("Password should be at least 6 characters long");
        }

        setErrors(_errors);
        setSuccess(false);
        if (_errors.length > 0) {
            return false;
        }
    }

    return (
        <div className="login container">
            <div className="login__title">Zaloguj się</div>
            <div className="header__decoration" />
            <div>
                <div className="login__details">
                    <label>Email</label>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <label>Hasło </label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="login__buttons">
                    <a href="/register"><button>Załóż konto</button></a>
                    <button>Zaloguj się</button>
                </div>
            </div>
        </div>
    );
}
export default Login;