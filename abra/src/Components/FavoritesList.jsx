import React from 'react'
import FavoriteCard from './FavoriteCard'


export default function FavoritesList({ quotes }) {
    return (
        <div className='favDiv'>
            {quotes.map((quote) => <FavoriteCard quote={quote} key={quote.id} />)}
        </div>
    )
}
