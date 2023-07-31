import React, { useState, useEffect } from "react";
import PopUp from "./components/PopUp";
import DisplayItems from "./components/DisplayItems";
import SearchElements from "./components/SearchElements";
import "./styles/app.css";
import "./styles/globalstyles.css";

const App = () => {
  const [data, setData] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const localData = window.localStorage.getItem("storedData");
    if (localData) {
      setData(JSON.parse(localData));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("storedData", JSON.stringify(data));
  }, [data]);

  const handleInputSubmit = (inputValue) => {
    if (editIndex !== null) {
      setData((prevData) => {
        const newData = [...prevData];
        newData[editIndex] = inputValue;
        return newData;
      });
      setEditIndex(null);
    } else {
      setData((prevData) => [...prevData, inputValue]);
    }
    setShowPopUp(false);
  };

  const handlePopUp = () => {
    setShowPopUp(false);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setShowPopUp(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const searchResult = (value) => {
    setSearchTerm(value.searchResult);

    if (!value.searchResult) {
      setSearchTerm("");
      setFilterData([]);
    } else {
      const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(value.searchResult.toLowerCase())
      );
      setFilterData(filteredData);
    }
  };

  return (
    <div className="container">
      <div className="title">
        <h4 id="title">Password Manager</h4>
      </div>
      <button id="addTaskButton" onClick={() => setShowPopUp(true)}>
        Add
      </button>
      {showPopUp && (
        <PopUp
          onSubmit={handleInputSubmit}
          onClose={handlePopUp}
          data={data[editIndex]}
        />
      )}
      <SearchElements filterSearch={searchResult} />
      {searchTerm && filterData.length === 0 ? (
        <p id="noDataFound">No matching data found.</p>
      ) : (
        <DisplayItems
          values={filterData.length ? filterData : data}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
};

export default App;
