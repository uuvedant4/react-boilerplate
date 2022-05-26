import React, { useReducer } from "react";
import "./useReducer.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "SHOWTEXT":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: false });

  return (
    <div className="container">
      <p>{state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "SHOWTEXT" });
        }}
      >
        Toggle
      </button>
      <div>{state.showText && <h3>I am text...</h3>}</div>
    </div>
  );
};

export default UseReducer;
