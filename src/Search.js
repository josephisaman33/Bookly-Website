/*function Search() {
    return(
        <div>
            <h1>Search Results</h1>
        </div>
    )
}
*/
import { useState, useEffect } from 'react';
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
    console.log(posts)
    console.log(posts.numFound)
    console.log((posts.docs))
    //console.log(posts.docs[0])
    return(null);
}
function Search(){
    return(
        <div>
            <h1>Test<App></App></h1>
        </div>
    );
}
export default Search;