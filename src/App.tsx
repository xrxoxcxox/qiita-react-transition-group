import React from 'react';
import logo from './logo.svg';
import './App.css';
import { css } from '@emotion/react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          css={appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const appLink = css`
  background-color: #61dafb;
  border-radius: 8px;
  color: #212121;
  font-weight: bold;
  padding: 20px 40px;
  text-decoration: none;
`

export default App;
