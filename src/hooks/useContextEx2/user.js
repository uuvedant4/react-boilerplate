import React, { useContext } from "react";
import { AppContext } from "./index.js";

const User = () => {
  const { userName } = useContext(AppContext);

  return (
    <div>
      <p>Username: {userName}</p>
    </div>
  );
};

export default User;
