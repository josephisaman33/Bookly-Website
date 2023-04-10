import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import Table from 'react-bootstrap/Table';

const App = () => {
    const [posts, setPosts] = useState([]);
    const cookies = new Cookies();
    let dummy = cookies.get('usearch').replace(" ", "+")
    useEffect(() => {
        fetch("https://openlibrary.org/search.json?title=" + dummy) 
          .then((response) => response.json())
          .then((data) => {
            cookies.set('sresult',data.num_found, { path: '/' });
            setPosts(data);
          })
          .catch((error) => console.log(error));
      }, []);
    //console.log(posts.docs)
    
    return(
        <>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Book Title</th>
          <th>Author</th>
          <th>Release Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{posts.num_found==cookies.get('sresult') ? posts.docs[0].title : "loading"}</td>
          <td>{posts.num_found==cookies.get('sresult') ? posts.docs[0].author_name[0] : "loading"}</td>
          <td>{posts.num_found==cookies.get('sresult') ? posts.docs[0].publish_date[0] : "loading"}</td>
        </tr>
      </tbody>
    </Table>
    </>
    );
}
function Search(){
    return(
        <div>
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
