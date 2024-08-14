import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [color, setColor] = useState("Black");

  const changeColor = () => {
    setColor("Red");
  };

  return (
    <>
      <h1>My favourite color is {color}!</h1>
      <button onClick={changeColor}>Blue</button>
    </>
  );
};

export default App;
