import React, { useMemo, useState } from "react";
import "./useMemo.css";

const UseMemo = () => {
  const [cnt, setCnt] = useState(0);
  const [item, setItem] = useState(2);

  const multiCnt = () => {
    console.log("MULTICOUNT CALLED!");
    return cnt * 4;
  };

  const multiCntMemo = useMemo(() => multiCnt(), [cnt]); // improves performance and rerenders the function only when state inside the dependency array is updated. e.g. [cnt].

  return (
    <div className="main-box">
      <div className="memo-container2">
        <p>{cnt}</p>
        <p>{item}</p>
        <p>{multiCntMemo}</p>
      </div>
      <div className="memo-container">
        <button onClick={() => setCnt(cnt + 1)}>Update Count</button>
        <button onClick={() => setItem(item * 2)}>Update Items</button>
      </div>
    </div>
  );
};

export default UseMemo;
