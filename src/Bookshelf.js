import {React, useEffect, useState} from 'react'
import {Popover, OverlayTrigger, Card, Button, Form} from 'react-bootstrap'
import './components/Bookshelf/cust.css'
import axios from 'axios';


//todo: form for adding book (similar to login)
//get route for returning users books to bookshelf
//post route for adding books to user's bookshelf



function Bookshelf() {

    const [listOfEntries, setListOfEntries] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:50000/bookshelf").then((response) => {
            setListOfEntries(response.data);
        });
    }, []);


    var myBookshelf = listOfEntries.map((value, key) => { 
        return <OverlayTrigger 
        trigger="click" 
        placement="right" 
        overlay={
          <Popover id="popover-basic">
              <Popover.Header>
              <div>
                  <h4>{value.title}</h4>
                  <h6>{value.author}</h6>
              </div>
              </Popover.Header>
              <Popover.Body>          
              <h6>Your Reflection</h6>
              <p>Rating: {value.user_rating}/5<br></br>
              {value.reflection}
              </p>
              <h6>Your Stats</h6>
              <p>
              Date Started: {value.date_started}<br></br>
              Date Finished: {value.date_finished}
              </p>
              </Popover.Body>
          </Popover>
        }
      >
          <Card className="cust">
              <Card.Img variant="top" src={value.img_url} />
          </Card>

      </OverlayTrigger>;
    })



    const [entry, setEntry] = useState("");
    const [pages, setPages] = useState(0);

    function handleAddBookSubmit(e) {
        e.preventDefault();
        console.log(entry, pages);
        axios
            .post("http://localhost:50000/bookshelf", {
                entry: entry,
                userId: 1,
                pages: pages,
            })
            .then((response) => {
                console.log();
                window.location.reload();
            })
            .catch(function (err) {
                console.error(err.message);
            });
    }


    return(
        <div style={{margin: "1.5vw"}}>
            <h1>Bookly Bookshelf</h1>

            <div className='cont'>
                <OverlayTrigger 
                    trigger="click" 
                    placement="right" 
                    overlay={
                        <Popover id="popover-basic">
                            <Popover.Header>Enter Book Title</Popover.Header>
                            <Popover.Body>  
                                <Form action='#' className='add-book-form' onSubmit={handleAddBookSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEntry">
                                        <Form.Label>Book Title</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="(Ex. The Hobbit)"
                                            value={entry}
                                            onChange={(e) => setEntry(e.target.value)} 
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPages">
                                        <Form.Label>Pages</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="304"
                                            value={pages}
                                            onChange={(e) => setPages(e.target.value)} 
                                        />
                                        <Form.Text className='text-muted'>
                                            This varies based on edition.
                                        </Form.Text>
                                    </Form.Group>
                                    
                                    <div style={{textAlign:'center'}}>
                                        <Button variant='primary' type='submit'>
                                            Add to Bookshelf
                                        </Button>
                                    </div>

                                </Form>
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <Button variant="outline-secondary" size="lg">
                    Add a book
                    </Button>
                </OverlayTrigger>
                
                {myBookshelf}
            </div>
        </div>
    )
}

export default Bookshelf;





// var myBookshelf = contents.map((content) => (
//     <OverlayTrigger 
//       trigger="click" 
//       placement="right" 
//       overlay={
//         <Popover id="popover-basic">
//             <Popover.Header>
//             <div>
//                 <h4>{content.title}</h4>
//                 <h6>{content.author}</h6>
//             </div>
//             </Popover.Header>
//             <Popover.Body>          
//             <h6>Your Reflection</h6>
//             <p>Rating: {content.user_rating}/5<br></br>
//             {content.reflection}
//             </p>
//             <h6>Your Stats</h6>
//             <p>
//             Date Started: {content.date_started}<br></br>
//             Date Finished: {content.date_finished}
//             </p>
//             </Popover.Body>
//         </Popover>
//       }
//     >

//         <Card className="cust">
//             <Card.Img variant="top" src={content.image} />
//         </Card>

//     </OverlayTrigger>
//   ))