import "./registerform.css"
import Button from 'react-bootstrap/Button';

const RegisterForm = () => {
    return (
        <div className="login-container">
            <div className="cover">
                <h1>Register</h1>
                <input type ="text" placeholder="Email"></input>
                <input type ="password" placeholder="Password"></input>
                <input type ="phone" placeholder="Phone Number"></input>
                    
                <Button variant="primary" className='login-btn'>Register</Button>

                <a href="./Login"><h4>Back To Login</h4></a>

            </div>
        </div>
    )
}

export default RegisterForm;