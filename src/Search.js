import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://openlibrary.org/search.json?title=where+the+crawdads+sing')
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                //console.log(err.message);
            });
    }, []);
    console.log((posts.docs))
    //console.log(posts.docs[0])
    const cookies = new Cookies();
    return(cookies.get('myCat'));
}
function Search(){
    return(
        <div>
            <h1>Test<App></App></h1>
        </div>
    );
}
export default Search;