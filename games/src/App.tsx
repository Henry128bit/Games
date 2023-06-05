import { useState } from "react";

import Alert from "./components/Alert";
import Button from "./components/Button";

import "./App.css";

function App() {
  const colorCollection = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];
  const [randomColor, setRandomColor] = useState("primary");

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorCollection.length);
    const newRandomColor = colorCollection[randomIndex];

    setRandomColor(newRandomColor);
  };

  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button color={randomColor} onClick={getRandomColor}>
        Click!
      </Button>
    </div>
  );
}

export default App;