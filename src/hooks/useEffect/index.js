import React, { useEffect, useState } from "react";
import "./useEffect.css";
import axios from "axios";

const UseEffect = () => {
  const [email, setEmail] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setEmail(response.data[Math.floor(Math.random() * 100 + 1)].email);
      });
  }, [count]);

  return (
    <div className="App">
      <p>Email: {email}</p>
      <div className="container">
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>COUNTER</button>
      </div>
    </div>
  );
};

export default UseEffect;
