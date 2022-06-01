import React, { useContext } from "react";
import { AppContext } from "./index.js";

const Login = () => {
  const { setUserName } = useContext(AppContext);

  return (
    <div>
      <input
        onChange={(event) => setUserName(event.target.value)}
        placeholder="Username goes here..."
      />
    </div>
  );
};

export default Login;
