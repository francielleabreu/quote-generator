import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RandomQuote.css';

const RandomQuote = () => {
    const [quote, setQuote] = useState({
        text: "Do you know that hope sometimes consists only of a question without an answer?",
        author: "Clarice Lispector",
    });

    const loadQuotes = async () => {
        try {
            const response = await axios.get('https://type.fit/api/quotes');
            setQuote(response.data[Math.floor(Math.random() * response.data.length)]);
        } catch (error) {
            console.error('Error quote:', error);
        }
    };

    const random = () => {
        loadQuotes();
    };

    useEffect(() => {
        loadQuotes();
    }, []);

    return (
        <div>
            <h1 className="header">Quote Generator</h1>
            <div className='container'>
                <div className='quote'>{quote.text}</div>
                <div>
                    <div className='line'></div>
                    <div className='bottom'></div>
                    <div className="author">- {quote.author.split(',')[0]}</div>
                </div>
                <button className="new-quote-button" onClick={random}>
                    New Quote
                </button>
            </div>
        </div>
    );
};

export default RandomQuote;