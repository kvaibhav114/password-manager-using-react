import React, { useState, useEffect } from "react";
import "../styles/popUp.css";
import "../styles/globalstyles.css";
const PopUp = ({ onSubmit, onClose, data }) => {
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [choice, setChoice] = useState("URL");

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setPassword(data.password);
      setChoice(data.choice);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !password.trim()) {
      alert("Input fields are empty");
    } else {
      onSubmit({ title, password, choice });
      onClose();
      setTitle("");
      setPassword("");
      setChoice("URL");
    }
  };

  const submitTitle = (e) => {
    setTitle(e.target.value);
  };
  const setPlaceholder = choice === "URL" ? "URL" : "Title";

  return (
    <div className="popup">
      <div className="popupwrapper">
        <form className="form" onSubmit={handleSubmit}>
          <button id="close" onClick={onClose}>
            Close
          </button>
          <div className="label">
            <label htmlFor="type">Select type:</label>
          </div>
          <div>
            <select
              id="select"
              name="type"
              value={choice}
              onChange={(e) => {
                setChoice(e.target.value);
              }}
            >
              <option value="URL">URL</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="label">
            <label htmlFor="title">Enter {setPlaceholder}</label>
          </div>
          <div>
            <input
              className="input"
              type="text"
              placeholder={setPlaceholder}
              value={title}
              onChange={submitTitle}
            />
          </div>
          <div className="label">
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <input
              className="input"
              type="text"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <button id="submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopUp;
