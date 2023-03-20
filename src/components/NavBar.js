import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NavBar() {
  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }
  return (
    <>
      <Navbar bg="DarkPurple" variant="dark">
        <Container>
          <Navbar.Brand href="home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/">Landing</Nav.Link>
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="bookshelf">Bookshelf</Nav.Link>
            <Nav.Link href="bookrec">Book Recommendation</Nav.Link>
            <Nav.Link href="library">Library Search</Nav.Link>
            <Nav.Link href="reflection">Reflection</Nav.Link>
            <Nav.Link href="account">Account</Nav.Link>
          </Nav>
        </Container>
      <Form onSubmit={handleSubmit} className="d-flex">
        <Form.Control
          type="search"
          placeholder="Find a Book"
          className="me-2"
          aria-label="Search"
          />
        <Button type="submit" variant="info" href="search">Search</Button> 
      </Form>
      </Navbar>
    </>
  );
}
//I want to replace with custom color
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
//https://openlibrary.org/search.json?q=Where+The+Crawdads+Sing