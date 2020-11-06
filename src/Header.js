import React from "react";
import styled from 'styled-components';
import theme from './theme';

export default function SetHeader(){
    return(
        <StyledHeader>
            <StyledH1>
                NASA Picture of the Day
            </StyledH1>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
margin: 5% 0;
`

const StyledH1 = styled.h1`
color: ${theme.titleColor}
font-family: Arial, Helvetica, sans-serif;
`