import React, { useState } from "react";
import axios from "axios";
import "./index.css";

const Joke = () => {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    fetch("https://v2.jokeapi.dev/joke/Any")
      .then((response) => response.json())
      .then((data) => setJoke(data.setup + "..." + data.delivery));
  };

  return (
    <div className="container">
      <p>{joke}</p>
      <button onClick={() => getJoke()}>Get Joke</button>
    </div>
  );
};

export default Joke;
