//import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Cookies from 'universal-cookie';
function NavBar() {
  /*const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('search', this.search.value);
    // You can append more fields if needed
    const cookies = new Cookies();
    cookies.set('myCat',this.search.value, { path: '/' });
  }
  */
  const handleSubmit = (event) => {
    const cookies = new Cookies();
    cookies.set('usearch',event.target[0].value, { path: '/' })
    console.log(cookies.get('usearch'))
  }
  return (
    <>
      <Navbar bg="DarkPurple" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="home">Bookly</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/">Landing</Nav.Link>
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="bookshelf">Bookshelf</Nav.Link>
            <Nav.Link href="bookrec">Book Recommendation</Nav.Link>
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
        <Button type="submit" variant="info">Search</Button> 
      </Form>
      </Navbar>
    </>
  );
}
export default NavBar;
/*
class LoginForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('username', this.username.value);
    formData.append('password', this.password.value);
    // You can append more fields if needed
    this.sendFormData(formData);
  }

  sendFormData = (formData) => {
    axios.post('/api/login', formData)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <form>
        <input type="text" ref={input => this.username = input} />
        <input type="password" ref={input => this.password = input} />
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}
*/

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
//https://openlibrary.org/search.json?q=Where+The+Crawdads+Sing