import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import Table from 'react-bootstrap/Table';

const App = () => {
    let dummy=null
    const cookies = new Cookies();
    const [posts, setPosts] = useState([]);
    dummy = cookies.get('usearch').replace(" ", "+")
    let dummy2="https://www.worldcat.org/search?q="+dummy
    useEffect(() => {
        fetch("https://openlibrary.org/search.json?title=" + dummy) 
          .then((response) => response.json())
          .then((data) => {
            cookies.set('sresult',data.num_found, { path: '/' });
            cookies.set('ssearch', data.num_found, {
              path: '/',
              sameSite: 'Strict',
              secure: true,
            });
            setPosts(data);
          })
          .catch((error) => console.log(error));
      }, []);
    //console.log(posts.docs)
    
    return(
        <>
        <Table striped borderless hover>
      <thead>
        <tr>
          <th>Book Title</th>
          <th>Author</th>
          <th>Release Date</th>
          <th>Library Search</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{posts.num_found===cookies.get('sresult') ? posts.docs[0].title : "loading"}</td>
          <td>{posts.num_found===cookies.get('sresult') ? posts.docs[0].author_name[0] : "loading"}</td>
          <td>{posts.num_found===cookies.get('sresult') ? posts.docs[0].publish_date[0] : "loading"}</td>
          <td><a href={dummy2}>Search Here!</a></td>
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
