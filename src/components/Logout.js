import React from 'react'

function Logout() {
    return (
        <div className="login container">
            <div className="login__title">Wylogowanie nastąpiło pomyślnie!</div>
            <div className="header__decoration" />
            <a href="/">
                <button style={{ padding: "10px", fontSize: "18px", backgroundColor: "transparent" }}>Strona główna</button>
            </a>
        </div>
    )
}

export default Logout
