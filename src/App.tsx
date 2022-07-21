import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from './store/rootReducer';
import { useLoadableData } from './toolkit/loadableData/useLoadableData';
import { getUniversities } from './domains/universities/api';

function App() {
  // console.log(store.getState())

  const { state, setState } = useLoadableData(getUniversities, 'universities', { type: 'loading' });
  console.log(state);

  return (
    
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
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

export default App;
