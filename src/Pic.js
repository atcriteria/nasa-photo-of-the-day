import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import theme from './theme';

export default function SetPicture(){
    const [currentImg, setCurrentImg] = useState(null);
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=jl65VDRhDGtxuPv0kmn5TLmn3DI50xSEQWFbjSQh&date=2012-03-14')
        .then((res) => {
            console.log(res.data);
            setCurrentImg(res.data.url);
        })
    }, []);
    // let img = currentImg.url;
    return (
        <StyledContainer className='container'>
            <StyledImg src={currentImg} alt='' />
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
  width: 100%;
  margin: 2.5% 0;
`

const StyledImg = styled.img`
    width: 100%;
`