import React, { useRef } from "react";
import Child from "./Child";
import "./useImperativeHandle.css";

const UseImperativeHandle = () => {
  const buttonRef = useRef(null);

  return (
    <div className="App">
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
        className="btn1"
      >
        Parent
      </button>
      <Child ref={buttonRef} className="btn2" />
    </div>
  );
};

export default UseImperativeHandle;
