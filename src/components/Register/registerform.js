import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./registerform.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const RegisterForm = () => {
  //register states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  //error & navigation
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState (false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password, phone);
    axios
      .post("/api/register", {
        email: email,
        password: password,
        phone: phone,
      })
      .then(function (response) {
        console.log(response);
        setRedirect(true);
      })
      .catch(function (error) {
        console.log(error);
        setError(true);
      });
  }

  return redirect?(<Navigate to="/login" />):(
    <div className="login-container">
      <div className="cover">
        <h1>Register</h1>

        <Form action="#" className="login-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className={error?"is-invalid":""}
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error?<p className="error-message">Email Already Exists</p>:""}
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

          {/* <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter #"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group> */}

          <Button variant="primary" type="submit" className="login-btn">
            Register
          </Button>
        </Form>

        <Link to="/login" preventScrollReset={true}>
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
