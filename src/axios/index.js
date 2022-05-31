import React, { useState } from "react";
import axios from "axios";
import "./index.css";

const Joke = () => {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    axios.get("https://v2.jokeapi.dev/joke/Any").then((response) => {
      setJoke(`${response.data.setup}
      ...${response.data.delivery}`);
    });
  };

  return (
    <div className="container">
      <p>{joke}</p>
      <button onClick={() => getJoke()}>Get Joke</button>
    </div>
  );
};

export default Joke;
