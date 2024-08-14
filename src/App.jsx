import { useRef } from "react";
import "./App.css";

const App = () => {
  const inputElement = useRef();

  const btnClicked = () => {
    console.log(inputElement.current);
    inputElement.current.style.backgroundColor = "white";
  };

  return (
    <>
      <input
        type='text'
        ref={inputElement}
      />
      <button onClick={btnClicked}>Click Here</button>
    </>
  );
};

export default App;
