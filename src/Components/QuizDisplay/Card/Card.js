import React from 'react';
import './Card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleFlip = this.handleFlip.bind(this);
  }

  // it is somewhat odd that the card class handles
  // revealing the solution instead of the control class,
  // but i think the skeuomorphic idea of 'flipping' a
  // flashcard is worth it
  handleFlip() {
    this.props.flip();
  }

  render() {
    const romajiDisplay = this.props.isRevealed
      ? this.props.romaji
      : ' ';
    return (
      <div className='card' onClick={this.handleFlip}>
        <p className='kan-text'>{this.props.kana}</p>
        <p className='romaji'>{romajiDisplay}</p>
      </div>
    )
  }
}

export default Card;
