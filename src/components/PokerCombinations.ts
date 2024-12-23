import PlayingCard from './PlayingCardClass';

export default class PokerCombination {
  private hand: PlayingCard[];

  constructor(hand: PlayingCard[]) {
    this.hand = hand;
  }

  determineOutcome(): string {
    const values = this.hand.map((card) => card.value);
    const symbols = this.hand.map((card) => card.symbol);
    const uniqueValues = new Set(values);
    const uniqueSymbols = new Set(symbols);

    if (uniqueSymbols.size === 1) return 'Flush';
    if (uniqueValues.size === 4) return 'One Pair';
    if (uniqueValues.size === 3) return 'Two Pairs or Three of a Kind';
    return 'High Card';
  }
}