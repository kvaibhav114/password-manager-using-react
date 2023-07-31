import React, { useState } from "react";
import "../styles/searchbar.css";
import "../styles/globalstyles.css";
const SearchElements = ({ filterSearch }) => {
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    filterSearch({ searchResult });
  };

  return (
    <div className="searchbar">
      <form action="" onSubmit={handleSearch}>
        <input
          id="searchbox"
          type="text"
          placeholder="Enter Text..."
          value={searchResult}
          onChange={(e) => {
            setSearchResult(e.target.value);
          }}
        />
        <button id="search" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchElements;
