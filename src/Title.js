import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function SetTitle(){
    const [title, setTitle] = useState('Nasa Image of the Day');
    const [date, setDate] = useState(null);

    useEffect(()=> {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=jl65VDRhDGtxuPv0kmn5TLmn3DI50xSEQWFbjSQh&date=2012-03-14')
        .then((res) => {
            setTitle(res.data.title);
            setDate(res.data.date);
        })
    }, []);

    return (
        <div className='mainHeader'>
            <h2>{title}</h2>
            <h4>{date}</h4>
        </div>
    )
}