import React, { useEffect } from "react";

const Child = ({ setGreetings }) => {
  useEffect(() => {
    console.warn("Rendered SETGREETINGS");
  }, [setGreetings]);

  return (
    <>
      <p>{setGreetings("Vedant Yetekar")}</p>
    </>
  );
};

export default Child;
