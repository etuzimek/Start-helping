import React from "react";

function Nav() {
    return (
        <div className="container">
            <div className="header__login">
                <a className="login__menu" href="/login">Zaloguj</a>
                <a className="login__menu" href="/register">Załóż konto</a>
            </div>
            <ul className="header__menu">
                <li><a className="menu__element" href="#">Start</a></li>
                <li><a className="menu__element" href="#foursteps">O co chodzi?</a></li>
                <li><a className="menu__element" href="#aboutus">O nas</a></li>
                <li><a className="menu__element" href="#">Fundacja i organizacje</a></li>
                <li><a className="menu__element" href="#contact">Kontakt</a></li>
            </ul>
        </div>
    );
}
export default Nav;