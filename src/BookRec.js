import { BookCards } from './components/BookRec/bookcards';
import basis from './components/BookRec/bookRecBasisData';
import contents from './components/BookRec/bookRecContentData';
import Table from 'react-bootstrap/Table'

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
                <tbody>
                    <tr>
                        <td>{originals[0]}</td>
                        <td>TO DO: PREV BUTTON</td>
                        <td>{recommendations[0]}</td>
                        <td>{recommendations[1]}</td>
                        <td>{recommendations[2]}</td>
                        <td>{recommendations[3]}</td>
                        <td>{recommendations[4]}</td>
                        <td>TO DO: NEXT BUTTON</td>
                    </tr>
                    <tr>
                        <td>{originals[1]}</td>
                        <td>PREV BUTTON</td>
                        <td>{recommendations[5]}</td>
                        <td>{recommendations[6]}</td>
                        <td>{recommendations[7]}</td>
                        <td>{recommendations[8]}</td>
                        <td>{recommendations[9]}</td>
                        <td>NEXT BUTTON</td>
                    </tr>
                    <tr>
                        <td>{originals[2]}</td>
                        <td>PREV BUTTON</td>
                        <td>{recommendations[10]}</td>
                        <td>{recommendations[11]}</td>
                        <td>{recommendations[12]}</td>
                        <td>{recommendations[13]}</td>
                        <td>{recommendations[14]}</td>
                        <td>NEXT BUTTON</td>
                    </tr>
                </tbody>
            </Table>
                
                
                
                {/* <div class="row">
                    <div class="column left" style={{alignItems:'stretch', backgroundColor:"#aaaaaa"}}>
                        <h2>Based On</h2>
                        <div style={{ width: '100%', display: "flex"}}>
                        {basis.map(basis => (
                            <BookCards
                                key={basis.id}
                                image={basis.image}
                            />
                        ))[0]}
                        </div>
                    </div>
                    <div class="column right" style={{alignItems:'stretch', backgroundColor:"#bbbbbb"}}>
                        <h2>We Recommend</h2>
                        <div style={{ width: '100%', display: "flex"}}>
                        {contents.map(contents => (
                            <BookCards
                                key={contents.id}
                                image={contents.image}
                            />
                        )).slice(0,5)}
                    </div>


                    </div>
                </div> */}

        </div>
    )
}



export default BookRec;