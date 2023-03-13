import React from 'react'
import './bookcards.css'

export function BookCards(props) {
    return(
        <div className='bookList'>
            <div key={props.id} className='bookCard'>
                <img src={props.image} alt='book-img' className='bookImage'></img>
            </div>
        </div>
    )
}