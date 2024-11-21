import React, { useState } from "react";
import "../styles/DisplayDropdown.css";

const DisplayDropdown = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        Display
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <label>Grouping:</label>
            <select
              value={groupBy}
              onChange={(e) => setGroupBy(e.target.value)}
              className="dropdown-select"
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <label>Ordering:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="dropdown-select"
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayDropdown;
