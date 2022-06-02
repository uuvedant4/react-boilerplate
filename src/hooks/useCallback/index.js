import React, { useCallback, useState } from "react";
import Child from "./Child";
import "./useCallback.css";

const UseCallback = () => {
  const [data, setData] = useState("Hello people, I'm ");
  const [toggle, setToggle] = useState(false);

  const setGreetings = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div className="callback-box">
      <Child setGreetings={setGreetings} />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <p>Toggle</p>}
    </div>
  );
};

export default UseCallback;
