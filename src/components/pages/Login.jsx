import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../../data/nextStopLogo";

function Login(){

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const [success, setSuccess] = useState('');

const navigate = useNavigate();

function handleSubmit(event){
    event.preventDefault();

    if (email === 'demo' && password === 'demo') {
        setSuccess('Login Successful!');
        setError('');
        navigate('/home', { replace: true });
    } else {
        setError('Invalid email or password');
        setSuccess();
    };
}

return (
    <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
                <img
                    className="login-logo"
                    src={logo}
                    alt= "logo image"
                />
            <h2>Welcome back!</h2>
            <div className="login-input">
                <label htmlFor="email">Email: </label>

            <input 
                type= "text" 
                placeholder="Email Address" 
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                />
            </div>

             <div className="login-input">
                <label htmlFor="password">Password: </label>
            <input 
                type= "password" 
                placeholder= "Password" 
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <button type="submit" className="submit-btn">Sign In</button> 

                {error && <p>{error}</p>}
                {success && <p>{success}</p>}          
        </form>
        <img className="login-images"
             src="https://ik.imagekit.io/fbon0i47u/Plan%20Today%20(8).png"
             alt="Login pictures of different destinations"
        />
    </div>
)}

export default Login;
