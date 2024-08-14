import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const increaseNum = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increaseNum}>Increase</button>
    </>
  );
};

export default App;
