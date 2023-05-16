import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();
let dummy="test123456789"
if (cookies.get("usearch")!==undefined){
  dummy=cookies.get('usearch')
}

const handleSubmit = (event) => {
  cookies.set('usearch', event.target[0].value, {
    path: '/',
    sameSite: 'Strict',
    secure: true,
  });
  console.log(cookies.get("usearch"))
}
const addBook = (e) => {
  console.log(cookies.get('usearch'))
  console.log(cookies.get('propname'))
  console.log(cookies.get('propauthor'))
  console.log("https://covers.openlibrary.org/b/oclc/"+cookies.get('propoclc')+"-L.jpg")
  axios
  .post("http://localhost:50000/books", {
    entry: cookies.get('usearch'),
    title: cookies.get('propname'),
    author: cookies.get('propauthor'),
    img_url: "https://covers.openlibrary.org/b/isbn/"+cookies.get('propisbn')+"-L.jpg"
  })
  .then((response) => {
    axios
      .post("http://localhost:50000/bookshelf", {
          entry: cookies.get('usearch'),
          userId: 1,
          pages: e.target[0].value,
      })
      .then((response) => {
          console.log();
          //window.location.reload();

      })
      .catch(function (err) {
          console.error(err.message);
      });
    console.log(response);
  })
  .catch(function (err) {
    console.error(err.message);
    alert("ERROR 1");
  })
      /*
    axios
      .post("http://localhost:50000/reflection", {
          reflection: "HI",
          rating: 5
      })
      .then((response) => {
          console.log();
          alert("Reflection Successful!");
          window.location.reload();

      })
      .catch(function (err) {
          console.error(err.message);
          alert("An error occured...");
      });
      */
}
//https://stackabuse.com/get-http-request-in-react/ was used in writing the GET/POST requests
const App = () => {
  if (dummy!=="test123456789"){
    dummy=dummy.replace(" ", "+")
  }
  console.log(dummy)
    let dummy2="https://www.worldcat.org/search?q="+dummy
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://openlibrary.org/search.json?title=" + dummy) 
          .then((response) => response.json())
          .then((data) => {
            setPosts(data);
            cookies.set('propname', data.docs[0].title, {
              path: '/',
              sameSite: 'Strict',
              secure: true,
            });
            cookies.set('propauthor', data.docs[0].author_name[0], {
              path: '/',
              sameSite: 'Strict',
              secure: true,
            });
            {typeof data.docs[0].isbn[0] !== 'undefined' ?
            cookies.set('propisbn', data.docs[0].isbn[0], {
              path: '/',
              sameSite: 'Strict',
              secure: true,
            }) :
            cookies.set('propisbn', data.docs[1].isbn[0], {
              path: '/',
              sameSite: 'Strict',
              secure: true,
            })}
          })
          .catch((error) => console.log(error));
      }, []);
      /*
      const [posts2, setPosts2] = useState([]);
      useEffect(() => {
          fetch("https://api.serpdog.io/images?api_key=645e7180edf54a2aa3fa7d92&q=lord+of+the+flies+book+cover&gl=us") 
            .then((response) => response.json())
            .then((data) => {
              setPosts2(data);
              console.log(data.meta.gl)
            })
            .catch((error) => console.log(error));
        }, []);
        */
    //console.log(posts.docs)
    if (dummy==="test" || posts.num_found===0){
      return("Please enter a valid book")
    }
    else{
    return(
        <>
        <Table striped borderless hover>
      <thead>
        <tr>
          <th>Book Title</th>
          <th>Author</th>
          <th>Release Date</th>
          <th>Library Search</th>
          <th>Add Book Below</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{typeof posts.num_found !== 'undefined' ? posts.docs[0].title : "loading..."}</td>
          <td>{typeof posts.num_found !== 'undefined' ? posts.docs[0].author_name[0] : "loading..."}</td>
          <td>{typeof posts.num_found !== 'undefined' ? posts.docs[0].first_publish_year : "loading..."}</td>
          <td><a href={dummy2}>Search Here!</a></td>
          <td>
            <Form onSubmit={addBook} className="d-flex">
          <Form.Control
            type="search2"
            placeholder="Page Number"
            className="me-2"
            aria-label="Search2"
            />
          <Button type="submit" variant="info">Add Book</Button>
        </Form>
        </td>
        </tr>
      </tbody>
    </Table>
    </>
    );
  }
}
function Search(){
    return(
        <div>
          <div>
          <Form onSubmit={handleSubmit} className="d-flex">
          <Form.Control
            type="search"
            placeholder="Find a Book"
            className="me-2"
            aria-label="Search"
            />
          <Button type="submit" variant="info">Search</Button> 
        </Form>
        </div>
            <h1><App></App></h1>
        </div>
    );
}
export default Search;

//<th>{posts.docs.length>0 ? posts.docs[0].title : "loading"}</th>
/*

        <tr>
          <th>{posts.num_found==cookies.get('sresult') ? posts.docs[1].title : "loading"}</th>
          <th>{posts.num_found==cookies.get('sresult') ? posts.docs[1].author_name[0] : "loading"}</th>
        </tr>
        <tr>
          <th>{posts.num_found==cookies.get('sresult') ? posts.docs[2].title : "loading"}</th>
          <th>{posts.num_found==cookies.get('sresult') ? posts.docs[2].author_name[0] : "loading"}</th>
*/
