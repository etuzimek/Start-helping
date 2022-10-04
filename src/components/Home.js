import React from "react";

function Home() {
    return (
        <>
            <div className="header container">
                <div className="header__photo" />
                <div className="header__nav">
                    <div className="header__login">
                        <a className="login" href="/login">Zaloguj</a>
                        <a className="login" href="#">Załóż konto</a>
                    </div>                   
                        <ul className="header__menu">
                            <li><a className="menu__element" href="#">Start</a></li>
                            <li><a className="menu__element" href="#">O co chodzi?</a></li>
                            <li><a className="menu__element" href="#">O nas</a></li>
                            <li><a className="menu__element" href="#">Fundacja i organizacje</a></li>
                            <li><a className="menu__element" href="#">Kontakt</a></li>
                        </ul>
                    <div className="header__right">
                        <p className="header__note">Zacznij pomagać! <br />Oddaj niechciane rzeczy w zaufane ręce</p>
                        <div className="header__decoration" />
                        <div className="button">
                            <a href="#" className="button__header">ODDAJ RZECZY</a>
                            <a href="#" className="button__header">ZORGANIZUJ ZBIÓRKĘ</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;