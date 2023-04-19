import "./registerform.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegisterForm = () => {
    return (
        <div className="login-container">
            <div className="cover">
                <h1>Register</h1>
                <Form action="#" className="login-form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="Enter #" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="login-btn">
                        Register
                    </Button>
                </Form>

                <a href="./Login"><h4>Back To Login</h4></a>

            </div>
        </div>
    )
}

export default RegisterForm;