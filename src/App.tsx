import React, { useState } from 'react';
import DeckOfCards from './components/DeckOfCards';
import PlayingCardComponent from './components/PlayingCard';
import PokerCombination from './components/PokerCombinations';
import PlayingCard from './components/PlayingCardClass';
import './cards.css';

const PokerGame: React.FC = () => {
  const [currentHand, setCurrentHand] = useState<PlayingCard[]>([]);
  const [combinationResult, setCombinationResult] = useState<string | null>(null);

  const dealNewHand = () => {
    const deck = new DeckOfCards();
    const newHand = deck.drawMultipleCards(5);
    setCurrentHand(newHand);

    const pokerCombination = new PokerCombination(newHand);
    setCombinationResult(pokerCombination.determineOutcome());
  };

  return (
    <div>
      {currentHand.length === 0 ? (
        <button onClick={dealNewHand}>Раздать карты</button>
      ) : (
        <div>
          <button onClick={dealNewHand}>Раздать карты</button>
          <div className="playingCards faceImages">
            {currentHand.map((card, index) => (
              <PlayingCardComponent key={index} value={card.value} symbol={card.symbol as any} />
            ))}
          </div>
          <p>Комбинация: {combinationResult}</p>
        </div>
      )}
    </div>
  );
};

export default PokerGame;