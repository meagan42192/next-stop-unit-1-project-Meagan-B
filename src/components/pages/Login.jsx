import { useState } from "react";

function Login(){

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const [success, setSuccess] = useState('');

function handleSubmit(event){
    event.preventDefault();

    if (email === 'meagan@testing.com' && password === '12345') {
        setSuccess('Login Successful!');
        setError('');
    } else {
        setError('Invalid email or password');
        setSuccess();
    };
}

return (
    <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
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
            <button type="submit" className="login-btn">Log In</button> 

                {error && <p>{error}</p>}
                {success && <p>{success}</p>}          
        </form>
    </div>
)}

export default Login;
