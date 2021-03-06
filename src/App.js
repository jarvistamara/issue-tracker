import React, { useState, useEffect } from 'react'
import AddIssue from './components/AddIssue/AddIssue.js'
import CurrentIssue from './components/CurrentIssue/CurrentIssue.js'
import './App.css';

function App() {
  const [addIssue, setAddIssue] = useState(true)

  const displayCurrentIssue = () => {
      setAddIssue(!addIssue)
  }

  const displayAddIssue = () => {
      setAddIssue(!addIssue)
  }

  return (
    <div className="App">
      <h1>Issue Tracker</h1>
      <div className='issue-card-container'>
        { addIssue ? <AddIssue /> : <CurrentIssue /> }
        </div>
      <div className='view-selection'>
        <button className='view-button' onClick={() => displayCurrentIssue()}>Current Issues</button>
        <button className='view-button active-btn' onClick={() => displayAddIssue()}>Add Issue</button>
      </div>
    </div>
  );
}

export default App;
