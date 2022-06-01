import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./Child.css";

const Child = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      {toggle && <p className="para">Hello World!</p>}
      <button onClick={() => setToggle(!toggle)} className="btn-child">
        Child
      </button>
    </>
  );
});

export default Child;
