import React from 'react';
import logo from '../logo.svg';
// import './App.css';

function Container() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React here
        </a>
    </div>
  );
}

export default Container;
