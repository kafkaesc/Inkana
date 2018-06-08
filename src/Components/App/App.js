import React from 'react';
import logo from './inkana.png';
import Quiz from '../QuizDisplay/QuizDisplay';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Inkana</h1>
        </header>
        <Quiz />
      </div>
    );
  }
}

export default App;
