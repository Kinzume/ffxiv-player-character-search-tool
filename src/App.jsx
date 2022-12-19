import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Character from "./components/Character";
import dataMock from "./data";

function App() {
  const [data, setData] = useState(dataMock);

  return (
    <div className="App">
      <Character data={data} />
    </div>
  );
}

export default App;
