import PlayingCard from './PlayingCardClass';

export default class DeckOfCards {
  private cards: PlayingCard[] = [];

  constructor() {
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const symbols = ['diams', 'hearts', 'clubs', 'spades'];

    for (const value of values) {
      for (const symbol of symbols) {
        this.cards.push(new PlayingCard(value, symbol));
      }
    }
  }

  drawCard(): PlayingCard {
    const index = Math.floor(Math.random() * this.cards.length);
    return this.cards.splice(index, 1)[0];
  }

  drawMultipleCards(count: number): PlayingCard[] {
    return Array.from({ length: count }, () => this.drawCard());
  }
}