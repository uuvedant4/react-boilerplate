import React, { useState } from "react";
import NAMEDATA from "./MOCK_DATA.json";
import "./index.css";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <input
        placeholder="Search..."
        type="text"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <p>
        {NAMEDATA.filter((val, key) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          return (
            <div key={key}>
              <p>{val.first_name}</p>
            </div>
          );
        })}
      </p>
    </div>
  );
};

export default SearchFilter;
