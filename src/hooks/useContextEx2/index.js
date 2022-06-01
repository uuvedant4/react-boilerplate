import React, { createContext, useState } from "react";
import Login from "./login";
import User from "./user";
import "./useContext.css";

export const AppContext = createContext(null);

const UseContext = () => {
  const [userName, setUserName] = useState("Christine Garcia");

  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <div className="login-box">
        <User />
        <Login />
      </div>
    </AppContext.Provider>
  );
};

export default UseContext;
