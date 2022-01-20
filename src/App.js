import logo from './logo.svg';
import './App.css';
import PokeList from './components/PokeList';
import React, { useState } from 'react'
import { render } from '@testing-library/react';


function App() {
  const [renderList, setRenderList] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setRenderList(true)
  }
  return (
    <div className="App" style={{textAlign:'center'}}>
      <form onSubmit={handleSubmit}>
        <button>Fetch Pokemon</button>
      </form>
   
      <PokeList />
    </div>
  );
}

export default App;
