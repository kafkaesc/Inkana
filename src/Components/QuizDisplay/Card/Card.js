import React from 'react';
import './Card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleFlip = this.handleFlip.bind(this);
  }

  handleFlip() {
    console.log(`flipping`);
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
