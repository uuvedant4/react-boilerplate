import React, { useState } from "react";
import "./useState.css";

const UseState = () => {
  const [text, setText] = useState("Hello world!");

  return (
    <div className="container">
      <p className="text">{text}</p>
      <input
        placeholder="Enter something..."
        className="input"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default UseState;
