
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [text, setText]=useState("");
  function greet(event){
    setText(event.target.value);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <label>Enter your Name:</label><br/>
        <input type="text" onChange={greet}/>
        {text && <p>Hello {text}</p>}
    </div>
  )
}

export default App
