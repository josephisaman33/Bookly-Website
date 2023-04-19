import { useState } from "react";
import { Link } from "react-router-dom";
import "./registerform.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password, phone);
  }

  return (
    <div className="login-container">
      <div className="cover">
        <h1>Register</h1>

        <Form action="#" className="login-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter #"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="login-btn">
            Register
          </Button>
        </Form>

        <Link to="/login" preventScrollReset={true}>Back to Login</Link>
      </div>
    </div>
  );
};

export default RegisterForm;
