import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import theme from './theme';

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
            <StyledPara className='mainPara'>
                {explanation}
            </StyledPara>
            <StyledCopyright className='copyright'>
                Copyright: {copyright}
            </StyledCopyright>
        </div>
    )
}


const StyledPara = styled.p`
font-size:.9rem;
margin-bottom: 5%;
`

const StyledCopyright = styled.p`
font-size: .7rem;
`