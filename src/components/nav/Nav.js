import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="nav container">
            <div className="nav__account">
                <ul className="nav__login">
                    <li>
                        <Link to="/login">Zaloguj</Link>
                    </li>
                    <li>
                        <Link to="/register">Załóż konto</Link>
                    </li>
                </ul>
            </div>
            <ul className="nav__menu">
                <li><a href="/">Start</a></li>
                <li><a href="/#foursteps">O co chodzi?</a></li>
                <li><a href="/#aboutus">O nas</a></li>
                <li><a href="/#whowehelp">Fundacja i organizacje</a></li>
                <li><a href="/#contact">Kontakt</a></li>
            </ul>
        </nav>
    );
}
export default Nav;