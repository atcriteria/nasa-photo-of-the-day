import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function SetPara(){
    const [explanation, setExplanation] = useState('About');
    const [copyright, setCopyright] = useState('copyright');

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=jl65VDRhDGtxuPv0kmn5TLmn3DI50xSEQWFbjSQh&date=2012-03-14')
        .then((res) => {
            setExplanation(res.data.explanation);
            setCopyright(res.data.copyright)
        })
    }, [])

    return (
        <div className='textContain'>
            <p className='mainPara'>
                {explanation}
            </p>
            <p className='copyright'>
                Copyright: {copyright}
            </p>
        </div>

    )
}