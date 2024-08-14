import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 2000);
  }, [count]);

  return (
    <>
      <h1>I&apos;ve rendered {count} times!</h1>
    </>
  );
};

export default App;
