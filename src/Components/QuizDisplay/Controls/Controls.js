import React from 'react';
import Kantroller from './Kantroller.js';
import './Controls.css';

class Controls extends React.Component {
  constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.prev = this.prev.bind(this);
      this.onHiragana = this.onHiragana.bind(this);
      this.onKatakana = this.onKatakana.bind(this);
      this.shuffle = this.shuffle.bind(this);
  }

  // moves to the next kana and updates the card
  next() {
    Kantroller.next();
    this.sendCardData();
  }

  // moves to the prev kana and updates the card
  prev() {
    Kantroller.prev();
    this.sendCardData();
  }

  // if the kana type is currently set to Katakana
  // this method toggles the kantroller, updates state for Controls
  onHiragana() {
    if(this.props.isKata) {
      Kantroller.toggleKana();
      this.props.updateKanaType(false);
      this.sendCardData();
    }
  }

  // if the kana type is currently set to Hiragana
  // this method toggles the kantroller, updates state for Controls
  onKatakana() {
    if(!this.props.isKata) {
      Kantroller.toggleKana();
      this.props.updateKanaType(true);
      this.sendCardData();
    }
  }

  // shuffles all the kana and updates state
  shuffle() {
    Kantroller.shuffle();
    this.sendCardData();
  }

  // updates the card data for the QuizDisplay class
  sendCardData() {
    this.props.updateCard(Kantroller.kana(), Kantroller.romaji());
  }

  render() {
    return (
      <div>
        <div>
          <button className='half-button-left' onClick={this.prev}>Previous</button>
          <button className='half-button-right' onClick={this.next}>Next</button>
        </div>
        <div>
          <button className='half-button-left' onClick={this.onHiragana}>Hiragana</button>
          <button className='half-button-right' onClick={this.onKatakana}>Katakana</button>
        </div>
        <button className='full-button' onClick={this.shuffle}>Shuffle</button>
      </div>
    );
  }
}

export default Controls;
