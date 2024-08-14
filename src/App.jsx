import { useCallback, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";

const App = () => {
  const [count, setCount] = useState(0);

  const newFn = useCallback(() => {}, []);

  return (
    <>
      <Header newFn={newFn} />
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Click here</button>
    </>
  );
};

export default App;
