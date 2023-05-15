import {React, useEffect, useState} from 'react'
import {Table, Image, Dropdown, DropdownButton, Button} from 'react-bootstrap'
import './components/Bookshelf/cust.css'
import axios from 'axios';


//todo: form for adding book (similar to login)
//get route for returning users books to bookshelf
//post route for adding books to user's bookshelf



function Trial() {

    const [reflectionsData, setReflectionsData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:50000/bookshelf/reflections").then((response) => {
            setReflectionsData(response.data);
        });
    }, []);


    // // Update Reflection
    function handleUpdateReflection(e, id, rating, reflection) {
      e.preventDefault();
      axios
          .put(`http://localhost:50000/bookshelf/reflections/${id}`, {
              rating: rating,
              reflection: reflection
          })
          .then((response) => {
              console.log("Updated Reflection and/or Rating");
          })
          .catch(function (err) {
              console.log(err.message);
          })
    }



    function ReflectionRows({data}) {
        const ratingChoices = [5,4,3,2,1,0];
        const [rating, setRating] = useState(data.rating);
        const [reflection, setReflection] = useState(data.reflection);
        
        return (
          <tr style={{verticalAlign:"middle"}} >
            <td style={{width:"20%"}}><Image className='cust' src={data.img_url} /></td>
            <td style={{width:"15%"}}>{data.title}<br/>{data.author}</td>
            <td style={{width:"15%"}}>
              <DropdownButton id="dropdown-basic-button" title={rating ? ("Rated: " + rating) : ("Rate this book!")} size="lg">
                {ratingChoices.map(ratingChoice => 
                  <Dropdown.Item key={ratingChoice} href="#" onClick={() => setRating(ratingChoice)}>
                    {ratingChoice}
                  </Dropdown.Item>
                )}
              </DropdownButton>
            </td>
            <td style={{width:"50%"}}>
              <textarea
                className="form-control"
                placeholder="Start writing your reflections here!"
                style={{height:"175px"}}
                value={reflection ? (reflection) : ""}
                onChange={event => setReflection(event.target.value)}>
              </textarea>
                  
              <Button 
                variant='primary' 
                size='sm' 
                type='submit' 
                onClick={(e) => handleUpdateReflection(e, data.id, rating, reflection)}
              >
                  Update!
                </Button>

            </td>
          </tr>
        )
    }


    


    return (
        <div style={{margin: "3vw"}}>
          <h1>Bookly Reflection and Ratings</h1>

          <Table striped borderless>
            <tbody>

                {reflectionsData.map(data => 
                    <ReflectionRows data={data} key={data.id}/>
                )}
              
            </tbody>
        </Table>
        
        </div>
    )
}

export default Trial;
