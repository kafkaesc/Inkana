import React from 'react';
import Card from './Card/Card';
import Controls from './Controls/Controls';

class QuizDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { kana: 'あ', romaji: 'a', isKata: false, isRevealed: false };
    this.flip = this.flip.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.updateKanaType = this.updateKanaType.bind(this);
  }

  flip() {
    this.setState({ isRevealed: !this.state.isRevealed });
    console.log(`new state is ${this.state.isRevealed}`);
  }

  updateCard(newKana, newRomaji) {
    this.setState({ kana: newKana, romaji: newRomaji });
  }

  updateKanaType(boolean) {
    this.setState({ isKata: boolean });
  }

  render() {
    return (
      <div>
        <Card
          kana={this.state.kana}
          romaji={this.state.romaji}
          isKata={this.state.isKata}
          isRevealed={this.state.isRevealed}
          flip={this.flip} />
        <Controls
          updateCard={this.updateCard}
          updateKanaType={this.updateKanaType}
          isKata = {this.state.isKata} />
      </div>
    );
  }
}

export default QuizDisplay;
