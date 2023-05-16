import {React, useEffect, useState} from 'react'
import {Popover, OverlayTrigger, Button, Form, Image} from 'react-bootstrap'
import './components/Bookshelf/cust.css'
import axios from 'axios';


//todo: form for adding book (similar to login)
//get route for returning users books to bookshelf
//post route for adding books to user's bookshelf



function Bookshelf() {

    //Welcome Back Message
    const [email, setEmail] = useState("");

    useEffect(() => {
        fetch("/api/account").then(async (response) => {
          if (response.status === 200) {
            let account = await response.json();
            // console.log(account.user);
            setEmail(account.user.email);
          }
        });
    });



    // Get Books -- Currently Reading
    const [currReading, setCurrReading] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:50000/bookshelf/currReading").then((response) => {
            setCurrReading(response.data);
        });
    }, []);


    // Get Books -- Finished Reading
    const [finReading, setFinReading] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:50000/bookshelf/finReading").then((response) => {
            setFinReading(response.data);
        });
    }, []);




    // Example adds: Where the Crawdads Sing, Moby Dick
    // Add Book
    const [entry, setEntry] = useState("");
    const [pages, setPages] = useState(0);

    
    // // FOR FINDING THE TITLE, AUTHOR, OCLC AND IMAGE LINK
    // const [title, setTitle] = useState("")
    // const [author, setAuthor] = useState("");
    // const [oclc, setOclc] = useState("");
    // const [oclcImageLink, setOclcImageLink] = useState("");


    function HandleAddBookSubmit(e) {
        e.preventDefault();

        // // USE API TO SEARCH FOR TITLE, AUTHOR, OCLC, OCLCIMAGELNK
        // let shit = entry.replaceAll(' ', '+');
        // // useEffect(() => {    // I don't think useEffect is allowed here
        //     fetch("https://openlibrary.org/search.json?title=" + shit)
        //     .then(async (response) => {
        //         let data = await response.json();
        //         setTitle(data.docs[0].title_suggest);
        //         setAuthor(data.docs[0].author_name[0]);

        //         let i = 0;
        //         //  Wanted to use a loop because some oclc's dont have images associated with them. so go thru until find one
        //         // for (let i = 1; i <= data.docs[0].oclc.length; i++) {
        //             setOclc(data.docs[0].oclc[i]);
        //             setOclcImageLink("https://covers.openlibrary.org/b/oclc/" + oclc + "-L.jpg?default=false");
        //             console.log(title, author, oclc, oclcImageLink);
        //             // if (fetch(OclcImageLink) !== "not found") { break; }
        //         // };

        //     }); // end fetch
        // // }, []);  // end useEffect



        // // INSERT THE BOOK INTO BOOK DATABASE, IF NOT ALREADY THERE
        // axios
        //     .post("http://localhost:50000/books", {
        //         entry: entry,
        //         title: title,
        //         author: author,
        //         img_url: oclcImageLink
        //     })
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch(function (err) {
        //         console.error(err.message);
        //     })





        // ADD TO YOUR BOOKSHELF
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
    
        
    // // Update Bookmark
    function handleUpdateBookmarkSubmit(e, id, onPage) {
        e.preventDefault();
        axios
            .put(`http://localhost:50000/bookshelf/${id}`, {
                bookmark: onPage
            })
            .then((response) => {
                console.log("Outside changed bm");
                window.location.reload();
            })
            .catch(function (err) {
                console.log(err.message);
            })
    }


    function BookCards({data}) {
        const [onPage, setOnPage] = useState(data.bookmark);
        return (<>
            <OverlayTrigger 
                data={data}
                key={data.id}
                trigger="click" 
                placement="right" 
                overlay={
                    <Popover id="popover-basic">
                        <Popover.Header>
                                <h4>{data.title}</h4>
                                <h6>{data.author}</h6>
                        </Popover.Header>

                        <Popover.Body>  
                            {(() => {
                                if( data.finished ) {
                                    return (<>
                                        <h6>Your Reflection</h6>
                                        <p>Rating: {data.user_rating}/5<br></br>
                                        {data.reflection}
                                        </p>
                                        <h6>Your Stats</h6>
                                        <p>Completed!</p>
                                        <p>Pages: {data.pages} <br/>
                                        Date started: {data.started} <br/>
                                        Date finished: {data.finished}</p>
                                    </>
                                    )
                                } else {
                                    return (<> 
                                        Bookmark:
                                        <div className='cont'>                     
                                            <Form action='#' className='update-bm-form' onSubmit={(e) => handleUpdateBookmarkSubmit(e, data.id, onPage)} style={{width:"26%", height:"33px"}}>
                                                <Form.Group className='mb-3' controlId='formBaiscUpdateBm'>
                                                <Form.Control 
                                                    type="text" 
                                                    // size='sm'
                                                    style={{height:"25px"}}
                                                    value={onPage}
                                                    onChange={(e) => setOnPage(e.target.value)} 
                                                />
                                                </Form.Group>
                                            </Form>
                                            /{data.pages}
                                        </div> 
                                        Date started: {data.started} <br/>
                                        </>
                                        
                                    )
                                }
                                })()}
                            

                            <Button variant='danger' size='sm' type='delete' onClick={() => removeBook(data.id)}>Remove</Button>
                        </Popover.Body>
                    </Popover>
                }
            >

                {/* <Card className="cust">
                    <Card.Img variant="top" src={data.img_url} />
                </Card> */}
                <Image className="cust" src={data.img_url} />

            </OverlayTrigger>
        </>)
    }
    


    return (
        <div style={{margin: "1.5vw"}}>
            {/* {title}
            {author}
            {oclc} */}
            <h1 className='title'>Welcome Back, {email}</h1>

            <h2>Currently Reading</h2>
            <div className='cont'>
                <OverlayTrigger 
                    trigger="click" 
                    placement="right" 
                    overlay={
                        <Popover id="popover-basic">
                            <Popover.Header>Enter Book Title</Popover.Header>
                            <Popover.Body>  
                                <Form action='#' className='add-book-form' onSubmit={HandleAddBookSubmit}>
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
                
                {currReading.map(data => 
                    <BookCards data={data} key={data.id} onSubmit={handleUpdateBookmarkSubmit}/>
                )}
            </div>
            
            <h2>Read</h2>
            <div className='cont'>
                {finReading.map(data => 
                    <BookCards data={data} key={data.id} onSubmit={handleUpdateBookmarkSubmit}/>
                )}
            </div>

        </div>

    )
}

export default Bookshelf;
