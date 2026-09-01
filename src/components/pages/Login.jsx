import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../data/nextStopLogo";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        setEmailError("");
        setPasswordError("");

        let hasErrors = false;

        if (email === "") {
            setEmailError("Email is required.");
            hasErrors = true;
        }

        if (password === "") {
            setPasswordError("Password is required.");
            hasErrors = true;
        }

        if (hasErrors) {
            return;
        }

        if (email !== "demo@gmail.com") {
            setEmailError("Invalid email.");
            return;
        }

        if (password !== "demo") {
            setPasswordError("Invalid password.");
            return;
        }

        navigate("/home", { replace: true });
    }

    return (
        <main className="login-container">

            <form className="login-form" onSubmit={handleSubmit}>

                <img
                    className="login-logo"
                    src={logo}
                    alt="Next Stop logo"
                />

                <h1>Welcome Back!</h1>

                <div className="login-input">
                    <label htmlFor="email">
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="demo@gmail.com"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                            setEmailError("");
                        }}
                    />

                    {emailError && (
                        <p className="input-error">
                            {emailError}
                        </p>
                    )}
                </div>

                <div className="login-input">
                    <label htmlFor="password">
                        Password
                    </label>

                    <input
                        id="password"
                        type="password"
                        placeholder="demo"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                            setPasswordError("");
                        }}
                    />

                    {passwordError && (
                        <p className="input-error">
                            {passwordError}
                        </p>
                    )}
                </div>

                <button
                    className="submit-btn"
                    type="submit"
                >
                    Sign In
                </button>

            </form>

            <img
                className="login-images"
                src="https://ik.imagekit.io/fbon0i47u/Plan%20Today%20(8).png"
                alt="Travel destinations"
            />

        </main>
    );
}

export default Login;