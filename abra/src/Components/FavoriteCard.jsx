import React from 'react'
import Card from 'react-bootstrap/Card';

export default function FavoriteCard({ quote }) {
    return (
        <Card style={{
            width: '15rem', flex: 1,
        }}>
            <Card.Body>
                <Card.Title>{quote.title}</Card.Title>
                <Card.Text>
                    Quote: {quote.quote}
                    <br /><br />
                    Author: {quote.author}
                    <br />
                    Date: {quote.date}
                    <br />
                    Category: {quote.category}

                </Card.Text>
            </Card.Body>
        </Card>
    )
}
