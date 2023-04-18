import {React} from 'react'
import contents from './components/Bookshelf/bookshelfData';
import {Popover, OverlayTrigger, Card, Button} from 'react-bootstrap'
import './components/Bookshelf/cust.css'


function Bookshelf() {
    var recommendations = contents.map((content) => (
        <OverlayTrigger 
          trigger="click" 
          placement="right" 
          overlay={
            <Popover id="popover-basic">
                <Popover.Header>
                <div>
                    <h4>{content.title}</h4>
                    <h6>{content.author}</h6>
                </div>
                </Popover.Header>
                <Popover.Body>          
                <h6>Your Reflection</h6>
                <p>Rating: {content.user_rating}/5<br></br>
                {content.reflection}
                </p>
                <h6>Your Stats</h6>
                <p>
                Date Started: {content.date_started}<br></br>
                Date Finished: {content.date_finished}
                </p>
                </Popover.Body>
            </Popover>
          }
        >

            <Card className="cust">
                <Card.Img variant="top" src={content.image} />
            </Card>

        </OverlayTrigger>
      ))


    return(
        <div style={{margin: "1.5vw"}}>
            <h1>Bookly Bookshelf</h1>
            <div className='cont'>
                <OverlayTrigger 
                    trigger="click" 
                    placement="right" 
                    overlay={
                        <Popover id="popover-basic">
                            <Popover.Body>          
                                TO DO
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <Button variant="outline-secondary" size="lg">
                    Add a book
                    </Button>
                </OverlayTrigger>
                {recommendations}
            </div>
        </div>
    )
}

export default Bookshelf;