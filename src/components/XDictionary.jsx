import { useState } from "react";

const XDictionary = () => {
  const initialDictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = () => {
    const foundWord = initialDictionary.find(
      (entry) => entry.word.toLowerCase() === search.toLowerCase()
    );
    if (foundWord) {
      setResult(foundWord.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
      <button type="submit" onClick={handleSearch}>
        Search
      </button>
      <h3>Definition:</h3>
      {result && <p>{result}</p>}
    </div>
  );
};

export default XDictionary;
