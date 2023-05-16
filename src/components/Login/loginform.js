import { useState } from "react";
import "./loginform.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  //login states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //error & navigation
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    axios
      .post("/api/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        navigate("/bookshelf");
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
        setError(true);
      });
  }

  return (
    <div className="login-container">
      <div className="cover">
        <h1>Login</h1>

        {error ? (
          <p className="error-message">Email or Password Invalid</p>
        ) : (
          ""
        )}
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

          <Button variant="primary" type="submit" className="login-btn">
            Login
          </Button>
        </Form>

        <Link to="/register" preventScrollReset={true}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
