import React from "react";

function Login () {
    return (
        <>
            <div>Zaloguj się</div>
            <form>
                <label>Email
                    <input type="text"/>
                </label>
                <label>Hasło
                    <input type="password"/>
                </label>
            </form>
            <a>Załóż konto</a>
            <a>Zaloguj się</a>
        </>
    );
}
export default Login;