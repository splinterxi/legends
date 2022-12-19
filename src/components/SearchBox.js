import React from "react";
import "../containers/App.css";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba bg-black"
        type="search"
        placeholder="Enter Legend Name"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
