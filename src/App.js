import React from "react";
import "./App.css";
import SetPicture from './Pic';
import SetTitle from './Title';
import SetPara from './Para';
import SetHeader from "./Header";
import styled from 'styled-components';
import theme from './theme';

function App() {
  return (
    <StyledApp className="App">
      {
        SetHeader()
      }
        {
          SetTitle()
        }
        {
          SetPicture()
        }
        {
          SetPara()
        }
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  background-color: ${theme.backgroundColor};
  color: ${theme.primaryColor};
  @media (max-width: 1920px){
    width: 70%;
    margin: auto;
  }
  @media (max-width: 900px){
    width: 70%;
    margin: auto;
  }
  @media (max-width: 550px){
    width: 80%;
    margin: auto;
  }
`