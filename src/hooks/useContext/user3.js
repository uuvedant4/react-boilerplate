import React, { useContext } from "react";
import { FirstName, Surname } from "../../App";
import "./user3.css";

const User3 = () => {
  const firstName = useContext(FirstName);
  const surname = useContext(Surname);

  return (
    <div className="user">
      I'm {firstName} {surname}.
    </div>
  );
};

export default User3;
