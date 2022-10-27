import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="container">
            <div className="header__login">
                <Link className="login__menu" to="/login">Zaloguj</Link>
                <Link className="login__menu" to="/register">Załóż konto</Link>
            </div>
            <ul className="header__menu">
                <li><a href="/">Start</a></li>
                <li><a href="/#foursteps">O co chodzi?</a></li>
                <li><a href="/#aboutus">O nas</a></li>
                <li><a href="/#whowehelp">Fundacja i organizacje</a></li>
                <li><a className="menu__element" href="/#contact">Kontakt</a></li>
            </ul>
        </div>
    );
}
export default Nav;