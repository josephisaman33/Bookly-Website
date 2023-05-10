import {React, useEffect, useState} from 'react'
import {Popover, OverlayTrigger, Card, Button, Form} from 'react-bootstrap'
import './components/Bookshelf/cust.css'
import axios from 'axios';


//todo: form for adding book (similar to login)
//get route for returning users books to bookshelf
//post route for adding books to user's bookshelf



function Bookshelf() {

    // Get Books
    const [listOfEntries, setListOfEntries] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:50000/bookshelf").then((response) => {
            setListOfEntries(response.data);
        });
    }, []);



    // Add Book
    const [entry, setEntry] = useState("");
    const [pages, setPages] = useState(-1);

    function handleAddBookSubmit(e) {
        e.preventDefault();
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



    // Delete Book
    const removeBook = (id) => {
        axios
            .delete(`http://localhost:50000/bookshelf/${id}`)
            .then(() => {
                window.location.reload();
                console.log("Delete Success");
            })
    }


    // Update Bookmark
    const [onPage, setOnPage] = useState(0);

    function handleUpdateBookmarkSubmit(e) {
        e.preventDefault();
        console.log(onPage);
        window.location.reload();
    }



    var myBookshelf = listOfEntries.map((value, key) => { 
        return <OverlayTrigger 
        key={value.id}
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
              {(() => { 
                if( value.bookmark >= value.pages) {
                    return (
                        <p>Completed!</p>
                    )
                } else {
                    return (
                        <div className='cont'>                        
                            <Form action='#' className='update-bm-form' onSubmit={handleUpdateBookmarkSubmit} style={{width:"55%" }}>
                                <Form.Group className='mb-3' controlId='formBaiscUpdateBm'>
                                <Form.Control 
                                    type="text" 
                                    size='sm'
                                    value={onPage}
                                    onChange={(e) => setOnPage(e.target.value)} 
                                />
                                </Form.Group>
                            </Form>

                            /{value.pages}
                        </div>

                    )
                }
                })()}

              Date Started: {value.date_started}<br></br>
              Date Finished: {value.date_finished}
              </p>
              <Button variant='danger' size='sm' type='delete' onClick={() => removeBook(value.id)}>Remove</Button>
              </Popover.Body>
          </Popover>
        }
      >
          <Card className="cust">
              <Card.Img variant="top" src={value.img_url} />
          </Card>

      </OverlayTrigger>;
    })

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
                                            // value={pages}
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