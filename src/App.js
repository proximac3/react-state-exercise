import React from 'react'
import './App.css';
import EightBall from './EightBall.js'
import {answers,randomAnswer} from './helpers.js'


function App() {
  return (
    <div className="App">
      <EightBall answers={answers} />
    </div>
  );
}

export default App;
