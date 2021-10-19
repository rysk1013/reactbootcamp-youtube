import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(new Date())
  setInterval(() => {
    setState(new Date())
  }, 1000)

  // この記述では「useState」を使っていないので更新されない
  // let state = new Date()
  // setInterval(() => {
  //   state = new Date()
  // }, 1000)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ReactBootcamp Youtube App
        </p>
        <p>{state.toLocaleTimeString()}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          第一回目勉強会
        </a>
      </header>
    </div>
  );
}

export default App;
