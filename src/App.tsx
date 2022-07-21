import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { useLoadableData } from './toolkit/loadableData/useLoadableData';
import { getUniversities } from './domains/universities/api';

function App() {
  const inputRef = useRef(null);

  const { state, setState } = useLoadableData(getUniversities, 'universities', { type: 'loading' });
  console.log(state);

  const fetchSmth = () => {
    setState({ type: 'loading', params: { country: 'jordan' } })
  }

  return (
    
<div className="App">
      <input ref={inputRef} />
      <button onClick={fetchSmth}>Click</button>
      <br/>
      {state.type === 'loaded' && state.data.map(({ name }: any, index: number) => <span key={index}>{name}<br/></span> )}
    </div>
  );
}

export default App;

