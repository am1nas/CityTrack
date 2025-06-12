import React, { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.includes("@")) {
            setError("Nevalidan email.");
            return;
        }

        if (password.length < 6) {
            setError("Šifra mora imati najmanje 6 karaktera.");
            return;
        }

        setError("");
        alert("Uspješna prijava!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Šifra"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Prijavi se</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
}

export default Login;
