import React, { useState } from 'react'
// import { useEffect } from 'react'
// import { api, api_key } from "../Service/service";
import CardText from '../Components/CardText'
import { Button } from 'react-bootstrap'
import CardTitle from '../Components/CardTitle';
import { useContext } from 'react';
import { GlobalContext } from '../Common/Context';
import { quoteJson } from '../Service/quote';

export default function Generator() {
    const [quote, setQuote] = useState(quoteJson);
    const { quotes, setQuotes } = useContext(GlobalContext);



    //Get the first quote, the api was limited to i made a quoteJson instead
    // useEffect(() => {
    //     getQuote();
    // }, [])


    //Get from api the quote
    // const getQuote = () => {
    //     fetch(api, {
    //         method: "GET",
    //         headers: new Headers({
    //             "Content-type": "application/json; charset=UTF-8",
    //             "Accept": "application/json; charset=UTF-8",
    //             "X-Theysaidso-Api-Secret": api_key,
    //         })
    //     })
    //         .then((response) => response.json())
    //         .then((data) => setQuote(data.contents.quotes[0]))
    //         .catch((error) => console.log(error));
    // }

    const addQuote = () => {
        const checkExist = quotes.filter(q => q.id === quote.id);
        if (checkExist.length === 0)
            setQuotes([...quotes, quote]);
    }

    const newQuote = () => {
        // getQuote();
    }


    return (
        <div>
            <h2>{quote.title}</h2>
            <div style={{ textAlign: "-webkit-center" }}>
                <CardTitle title={quote.quote} />
            </div>
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button style={{ height: 50, marginLeft: 5 }} onClick={addQuote}>Like</Button>
                <div style={{ display: "flex" }}>
                    <CardText text={quote.author} />
                    <CardText text={quote.category} />
                </div>
            </div>
            <div style={{ textAlign: "-webkit-center", marginTop: 50 }}>
                <Button onClick={newQuote}>New Quote</Button>
            </div>
        </div>
    )
}
