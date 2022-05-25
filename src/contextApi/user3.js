import React from "react";
import { FirstName, Surname } from "../App";
import "./user3.css";

const User3 = () => {
  return (
    <>
      <FirstName.Consumer>
        {(firstName) => {
          return (
            <>
              <Surname.Consumer>
                {(surname) => {
                  return (
                    <div className="user">
                      I'm {firstName} {surname}.
                    </div>
                  );
                }}
              </Surname.Consumer>
            </>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default User3;
