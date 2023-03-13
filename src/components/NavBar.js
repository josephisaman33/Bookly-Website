import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="danger" variant="light">
        <Container>
          <Navbar.Brand href="home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/">Landing</Nav.Link>
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="bookshelf">Bookshelf</Nav.Link>
            <Nav.Link href="bookrec">Book Recommendation</Nav.Link>
            <Nav.Link href="library">Library</Nav.Link>
            <Nav.Link href="reflection">Reflection</Nav.Link>
            <Nav.Link href="account">Account</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

/*
function NavBar() {
    return (
        <ul>
            <li><Link to="/">Landing</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/home">Homepage</Link></li>
            <li><Link to="/bookshelf">Bookshelf</Link></li>
            <li><Link to="/bookrec">Book Recommendation</Link></li>
            <li><Link to="/library">Library</Link></li>
            <li><Link to="/reflection">Reflection and Ratings</Link></li>
            <li><Link to="/account">Account</Link></li>
        </ul>
    )
}
*/
export default NavBar;