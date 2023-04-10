import { BookCards } from './components/BookRec/bookcards';
import basis from './components/BookRec/bookRecBasisData';
import contents from './components/BookRec/bookRecContentData';
import {Table} from 'react-bootstrap'
// import {React, useState} from 'react'

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
                <tbody style={{verticalAlign: "bottom"}}>
                    <tr>
                        <td>{originals[0]}</td>
                        <td style={{verticalAlign: "middle"}}><button>&#8249;</button></td>
                        <div onClick={() => alert("Hello from here")}><td>{recommendations[0]}</td></div>
                        <td>{recommendations[1]}</td>
                        <td>{recommendations[2]}</td>
                        <td>{recommendations[3]}</td>
                        <td>{recommendations[4]}</td>
                        <td style={{verticalAlign: "middle"}}><button>&#8250;</button></td>
                    </tr>
                    <tr>
                        <td>{originals[1]}</td>
                        <td style={{verticalAlign: "middle"}}><button>&#8249;</button></td>
                        <td>{recommendations[5]}</td>
                        <td>{recommendations[6]}</td>
                        <td>{recommendations[7]}</td>
                        <td>{recommendations[8]}</td>
                        <td>{recommendations[9]}</td>
                        <td style={{verticalAlign: "middle"}}><button>&#8250;</button></td>
                    </tr>
                    <tr>
                        <td>{originals[2]}</td>
                        <td style={{verticalAlign: "middle"}}><button>&#8249;</button></td>
                        <td>{recommendations[10]}</td>
                        <td>{recommendations[11]}</td>
                        <td>{recommendations[12]}</td>
                        <td>{recommendations[13]}</td>
                        <td>{recommendations[14]}</td>
                        <td style={{verticalAlign: "middle"}}><button>&#8250;</button></td>
                    </tr>
                </tbody>
            </Table>


            YOOOOO
            <Table w-auto>
                <thead>
                    <tr>
                        <th>Based On</th>
                        <th colSpan={3}>We Recommend</th>
                    </tr>
                </thead>
                <tbody style={{verticalAlign: "bottom"}}>
                    <tr>
                        <td>{originals[0]}</td>
                        <td style={{verticalAlign: "middle"}}><button>&#8249;</button></td>
                        <td><div className='container-fluid'><div className='row'>{recommendations.slice(0,5)}</div></div></td>
                        <td style={{verticalAlign: "middle"}}><button>&#8250;</button></td>
                    </tr>
                    <tr>
                        <td>{originals[1]}</td>
                        <td style={{verticalAlign: "middle"}}><button>&#8249;</button></td>
                        <td>{recommendations.slice(5,10)}</td>
                        <td style={{verticalAlign: "middle"}}><button>&#8250;</button></td>
                    </tr>
                    <tr>
                        <td>{originals[2]}</td>
                        <td style={{verticalAlign: "middle"}}><button>&#8249;</button></td>
                        <td>{recommendations.slice(10,15)}</td>
                        <td style={{verticalAlign: "middle"}}><button>&#8250;</button></td>
                    </tr>
                </tbody>
            </Table>

            YOOOOOOOOOOOOOOOOOOOOOO

            

        

        





        </div>
    )
}



export default BookRec;