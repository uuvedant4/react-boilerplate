import React, { useRef, useState } from "react";
import "./useRef.css";

const UseRef = () => {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  const changeName = () => {
    if (inputRef.current.value === "") {
      inputRef.current.focus();
    }

    setName(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <>
      <div className="App">
        <p>{name}</p>
        <div className="container">
          <input placeholder="Name goes here..." type="text" ref={inputRef} />
          <button onClick={changeName}>Change Name</button>
        </div>
      </div>
    </>
  );
};

export default UseRef;
