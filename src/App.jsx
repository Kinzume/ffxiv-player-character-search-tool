import { useEffect, useState } from "react";
import "./styles/App.css";
import Character from "./components/Character";
import ExampleData from "./data/ExampleData.json";
import Search from "./components/Search";

function App() {
  const [data, setData] = useState(ExampleData);
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (id === null) return;
    setError(false);
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      signal: signal,
    };
    fetch(`https://xivapi.com/character/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        return setLoading(false);
      })
      .catch((error) => {
        if (signal.aborted) return;
        console.log("error", error);
        return setError(true);
      });

    return () => {
      controller.abort();
      // console.log("Download aborted");
    };
  }, [id]);
  return (
    <div className="App">
      <Search setId={setId} />
      <Character
        data={data}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default App;
