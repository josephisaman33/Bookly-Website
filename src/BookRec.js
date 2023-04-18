import { BookCards } from './components/BookRec/bookcards';
import basis from './components/BookRec/bookRecBasisData';
import contents from './components/BookRec/bookRecContentData';
import {Table, Popover, OverlayTrigger, Button} from 'react-bootstrap'
import {React} from 'react'

function BookRec() {
    var originals = basis.map(basis => (
                        <BookCards
                        key={basis.id}
                        image={basis.image}
                        />
                    ))

    var recommendations = contents.map(contents => (
                            <BookCards
                                key={contents.id}
                                image={contents.image}
                            />
                          ))

    const basisPopover = (props) => (
      <Popover id="popover-basic">
        <Popover.Header>
          <div>
            <h4>{props.title}</h4>
            <h6>{props.author}</h6>
          </div>
        </Popover.Header>
        <Popover.Body>          
          <h6>Your Reflection</h6>
          <p>Rating: {props.user_rating}/5<br></br>
          {props.reflection}
          </p>
          <h6>Your Stats</h6>
          <p>
          Date Started: {props.date_started}<br></br>
          Date Finished: {props.date_finished}
          </p>
          <Button variant="outline-secondary">Choose a different book</Button>
        </Popover.Body>
      </Popover>
    );                   

    const popover = (props) => (
        <Popover id="popover-basic">
          <Popover.Header>
            <div>
              <h4>{props.title}</h4>
              <h6>{props.author}</h6>
            </div>
          </Popover.Header>
          <Popover.Body>
            <h6>Description</h6>
            <p>{props.description}</p>
            <Button variant="outline-secondary">Add to your bookshelf</Button>
          </Popover.Body>
        </Popover>
      );


    return(
        <div className='BookRec'>
            <h1>Bookly Book Recommendation</h1>
            <Table borderless>
                <thead>
                    <tr>
                        <th>Based On</th>
                        <th colSpan={7}>We Recommend</th>
                    </tr>
                </thead>
                <tbody style={{verticalAlign: "bottom"}}>
                    <tr>
                        <OverlayTrigger trigger="click" placement="right" overlay={basisPopover(basis[0])}><td>{originals[0]}</td></OverlayTrigger>
                        <td style={{verticalAlign: "middle"}}><button>&#8249;</button></td>
                        <OverlayTrigger trigger="click" placement="right" overlay={popover(contents[0])}><td>{recommendations[0]}</td></OverlayTrigger>
                        <OverlayTrigger trigger="click" placement="right" overlay={popover(contents[1])}><td>{recommendations[1]}</td></OverlayTrigger>
                        <OverlayTrigger trigger="click" placement="right" overlay={popover(contents[2])}><td>{recommendations[2]}</td></OverlayTrigger>
                        <OverlayTrigger trigger="click" placement="right" overlay={popover(contents[3])}><td>{recommendations[3]}</td></OverlayTrigger>
                        <OverlayTrigger trigger="click" placement="left" overlay={popover(contents[4])}><td>{recommendations[4]}</td></OverlayTrigger>
                        <td style={{verticalAlign: "middle"}}><button>&#8250;</button></td>
                    </tr>
                    <tr>
                        <OverlayTrigger trigger="click" placement="right" overlay={basisPopover(basis[1])}><td>{originals[1]}</td></OverlayTrigger>
                        <td style={{verticalAlign: "middle"}}><button>&#8249;</button></td>
                        <OverlayTrigger trigger="click" placement="right" overlay={popover(contents[5])}><td>{recommendations[5]}</td></OverlayTrigger>
                        <OverlayTrigger trigger="click" placement="right" overlay={popover(contents[6])}><td>{recommendations[6]}</td></OverlayTrigger>
                        <OverlayTrigger trigger="click" placement="right" overlay={popover(contents[7])}><td>{recommendations[7]}</td></OverlayTrigger>
                        <OverlayTrigger trigger="click" placement="right" overlay={popover(contents[8])}><td>{recommendations[8]}</td></OverlayTrigger>
                        <OverlayTrigger trigger="click" placement="left" overlay={popover(contents[9])}><td>{recommendations[9]}</td></OverlayTrigger>
                        <td style={{verticalAlign: "middle"}}><button>&#8250;</button></td>
                    </tr>
                    <tr>
                        <OverlayTrigger trigger="click" placement="right" overlay={basisPopover(basis[2])}><td>{originals[2]}</td></OverlayTrigger>
                        <td style={{verticalAlign: "middle"}}><button>&#8249;</button></td>
                        <OverlayTrigger trigger="click" placement="right" overlay={popover(contents[10])}><td>{recommendations[10]}</td></OverlayTrigger>
                        <OverlayTrigger trigger="click" placement="right" overlay={popover(contents[11])}><td>{recommendations[11]}</td></OverlayTrigger>
                        <OverlayTrigger trigger="click" placement="right" overlay={popover(contents[12])}><td>{recommendations[12]}</td></OverlayTrigger>
                        <OverlayTrigger trigger="click" placement="right" overlay={popover(contents[13])}><td>{recommendations[13]}</td></OverlayTrigger>
                        <OverlayTrigger trigger="click" placement="left" overlay={popover(contents[14])}><td>{recommendations[14]}</td></OverlayTrigger>
                        <td style={{verticalAlign: "middle"}}><button>&#8250;</button></td>
                    </tr>
                </tbody>
            </Table>

        </div>
    )
}



export default BookRec;