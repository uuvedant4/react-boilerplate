import React, { useReducer } from "react";
import "./useReducer.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state > 0 ? state - 1 : state;
    default:
      return state;
  }
};

const UseReducer = () => {
  const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <p>{state}</p>
      <div className="btn-container">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          INCREMENT
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          DECREMENT
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
