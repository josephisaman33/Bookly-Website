import "./loginform.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginForm = () => {
    return (
        <div className="login-container">
            <div className="cover">
                <h1>Login</h1>

                <Form action="#" className="login-form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="login-btn">
                        Login
                    </Button>
                </Form>

                <a href="./Register"><h4>Register</h4></a>

            </div>
        </div>
    )
}

export default LoginForm;