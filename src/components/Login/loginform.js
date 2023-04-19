import "./loginform.css"
import Button from 'react-bootstrap/Button';

const LoginForm = () => {
    return (
        <div className="login-container">
            <div className="cover">
                <h1>Login</h1>
                <input type ="text" placeholder="Email"></input>
                <input type ="password" placeholder="Password"></input>
                    
                <Button variant="primary" className='login-btn'>Login</Button>

                <h4>Forgot Password?</h4>
                <a href="./Register"><h3>Register</h3></a>

            </div>
        </div>
    )
}

export default LoginForm;