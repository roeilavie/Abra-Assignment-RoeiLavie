import React, { useState } from 'react'
import FavoritesList from '../Components/FavoritesList'
import { GlobalContext } from '../Common/Context'
import { useContext } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

export default function Favorites() {
    const { quotes } = useContext(GlobalContext);
    const [quotesToShow, setQuotesToShow] = useState(quotes);
    const [categoryChosen, setCategoryChosen] = useState("");

    const search = () => {
        const quotesByCategory = quotes.filter((q) => q.category === categoryChosen);
        setQuotesToShow(quotesByCategory);
    }

    return (
        <div>
            <h2>Favorites</h2>
            <div style={{ display: 'flex', justifyContent: "center" }}>
                <Form.Control onChange={(e) => setCategoryChosen(e.target.value)} style={{ width: "50%" }} type="email" placeholder="Search a quote by category" />
                <Button onClick={search} style={{ marginLeft: 10 }}>Search</Button>
            </div>
            <br />
            {quotes.length > 0 && <FavoritesList quotes={quotesToShow} />}
        </div>
    )
}
