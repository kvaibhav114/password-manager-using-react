import React from "react";
import "../styles/displayitems.css";
import "../styles/globalstyles.css";
const DisplayItems = ({ values, onDelete, onEdit }) => {
  if (!Array.isArray(values)) {
    return <p>Error: Invalid data format.</p>;
  }

  return (
    <div className="itemswrapper">
      {values.map((item, index) => (
        <div key={index} className="elements">
          <div id="displayItemsContainer">
            <p>Title: {item.title}</p>
            <p>Password: {item.password}</p>
            <p>Type: {item.choice}</p>
          </div>
          <div id="buttons">
            <button onClick={() => onEdit(index)}>Edit</button>
            <button id="deleteButton" onClick={() => onDelete(index)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayItems;
