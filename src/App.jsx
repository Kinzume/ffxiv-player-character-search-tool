import { useState } from "react";
import "./styles/App.css";
import Character from "./components/Character";
import ExampleData from "./data/ExampleData.json";
import useCharLookup from "./components/useCharLookup";

function App() {
  const [data, setData] = useState(ExampleData);
  const { loading, error, characterData } = useCharLookup(22005589);
  // const { loading, error, characterData } = useCharLookup(25495231);
  // let loading = true;
  // let error = false;
  // let loading = false;
  // let error = true;
  // let loading = false;
  // let error = false;
  return (
    <div className="App">
      {/* <Character
        data={data}
        loading={loading}
        error={error}
      /> */}
      <Character
        data={characterData}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default App;
