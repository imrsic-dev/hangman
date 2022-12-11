import { createContext, useState, useEffect, useContext } from "react";

export const GameContext = createContext({
  dificultyLevel: "easy",
  username: "",
  phrase: "",
  alphabet: "",
  addUsername: () => {},
  changeDificultyLevel: () => {},
});

export const GameProvider = ({ children }) => {
  const [dificultyLevel, setDificultyLevel] = useState("easy");
  const [username, setUsername] = useState("");
  const [phrase, setPhrase] = useState("");
  const [alphabet, setAlphabet] = useState([]);

  useEffect(() => {
    const getQuote = async () => {
      let response = await fetch("https://type.fit/api/quotes");
      response = await response.json();
      if (!response.length) {
        setPhrase("");
      }
      setPhrase(response[0]);
    };
    getQuote();
  }, []);

  const addUsername = (username) => setUsername(username);

  const changeDificultyLevel = (dificultyLevel) =>
    setDificultyLevel(dificultyLevel);

  const value = {
    dificultyLevel,
    username,
    phrase,
    alphabet,
    addUsername,
    changeDificultyLevel,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
