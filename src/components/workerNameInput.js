import React, { Component } from 'react';
import './workerNameInput.css';

const WorkerNameInput = ({searchStr, sendName}) => {

  const handleChange = event => {
    event.preventDefault();
    sendName(event.target.value)
  }

  return (
      <div className="input-container">
        <form>
          <input
              type="text"
              name="searchStr"
              placeholder="Filter by worker name..."
              value={searchStr}
              onChange={handleChange}
              id='worker-filter-text'
              className="text-field"
              required="required">
          </input>
        </form>
      </div>
  );
}

export default WorkerNameInput;
