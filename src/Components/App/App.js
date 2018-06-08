import React from 'react';
import logo from './inkana.png';
import Quiz from '../QuizDisplay/QuizDisplay';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { AppName: 'Inkana' };
    this.inEnglish = this.inEnglish.bind(this);
    this.inKana = this.inKana.bind(this);
  }

  // used to set the pages title unti english
  inEnglish(e) {
    this.setState({ AppName: 'Inkana'});
  }

  // *groan*
  inKana(e) {
    this.setState({ AppName: 'インカナ' });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"
            onMouseOver={this.inKana}
            onMouseLeave={this.inEnglish} >
            {this.state.AppName}
          </h1>
        </header>
        <Quiz />
      </div>
    );
  }
}

export default App;
