import {React, useEffect, useState} from 'react'
// import contents from './components/Bookshelf/bookshelfData';
import {Popover, OverlayTrigger, Card, Button} from 'react-bootstrap'
import './components/Bookshelf/cust.css'
import axios from 'axios';

// /api/routes/api.js       for like inserting title - writing queries
//https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

// /src/register/registerform.js     axios .post of function 


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



    // const [title, setTitle] = useState(". . .");

    // const onSubmitTitle = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const body = {title};
    //         const response = await fetch("/bookshelf", {
    //             method: "POST", 
    //             headers: {"Content-Type": "application/json"},
    //             body: JSON.stringify(body)
    //         });

    //         console.log(response);
    //     } catch (err) {
    //         console.error(err.message)
    //     }
    // }


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
                                {/* <form onSubmit={handleSubmit}> 
                                    <input type='text' value={title} onChange={e => setTitle(e.target.value)}/>
                                </form> */}
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