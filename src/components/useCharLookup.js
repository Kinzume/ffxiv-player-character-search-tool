import { useEffect, useState } from "react";

export default function useCharLookup(charId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [characterData, setCharacterData] = useState();
  useEffect(() => {
    setLoading(true);
    setError(false);
    const controller = new AbortController();
    const signal = controller.signal;
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      signal: signal,
    };

    fetch(`https://xivapi.com/character/${charId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setCharacterData(result);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return { loading, error, characterData };
}
