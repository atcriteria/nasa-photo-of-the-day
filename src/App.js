import React from "react";
import "./App.css";
import SetPicture from './Pic';
import SetTitle from './Title';
import SetPara from './Para';
import SetHeader from "./Header";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;