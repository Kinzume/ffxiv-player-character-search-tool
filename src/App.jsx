import { useState } from "react";
import "./styles/App.css";
import Character from "./components/Character";
import ExampleData from "./data/ExampleData.json";

function App() {
  const [data, setData] = useState(ExampleData);

  return (
    <div className="App">
      <Character data={data} />
    </div>
  );
}

export default App;
