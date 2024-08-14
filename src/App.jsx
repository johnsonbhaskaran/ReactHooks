import React, { useState } from "react";
import "./App.css";

const App = () => {
  // const [brand, setBrand] = useState("Ferrari");
  // const [model, setModel] = useState("Roma");
  // const [year, setYear] = useState("2023");
  // const [color, setColor] = useState("Red");

  const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: 2023,
    color: "red",
  });

  const changeColor = (e) => {
    const btnValue = e.target.innerText;
    console.log(btnValue);
    setCar((prev) => {
      return { ...prev, year: 2025, color: btnValue };
    });
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}
      </p>
      <span>
        <button
          style={{ backgroundColor: "mediumblue", marginRight: ".5em" }}
          onClick={changeColor}
        >
          Medium Blue
        </button>
      </span>
      <span>
        <button
          style={{ backgroundColor: "mediumorchid", marginRight: ".5em" }}
          onClick={changeColor}
        >
          Orchid
        </button>
      </span>
      <span>
        <button
          style={{ backgroundColor: "mediumseagreen" }}
          onClick={changeColor}
        >
          Sea Green
        </button>
      </span>
    </>
  );
};

export default App;
