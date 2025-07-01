import { useState } from "react";
import "./App.css";
import Greeting from "./greeting.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      🌸 <Greeting name="Euralio" />
    </>
  );
}

export default App;
