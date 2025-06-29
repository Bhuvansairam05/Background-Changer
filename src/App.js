import './App.css';
import React,{ useState } from 'react';

function App() {
  const [color, setColor]  = useState("white");
  function changeColor(newColor){
    setColor(newColor);
    document.body.style.backgroundColor = newColor;
  }
  return (
    <> 
    <h1>Sample Background color changer</h1>
    <h1>Color: {color}</h1>
    <div class="Box">
      <button onClick={()=>changeColor("green")} id="green" class="button">Green</button>
      <button onClick={()=>changeColor("red")} id="red" class="button">Red</button>
      <button onClick={()=>changeColor("blue")} id="blue" class="button">Blue</button>
      <button onClick={()=>changeColor("yellow")} id="yellow" class="button">Yellow</button>
      <button onClick={()=>changeColor("white")} id="white" class="button">White</button>
    </div>
    </>
  );
}

export default App;
