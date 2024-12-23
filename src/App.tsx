import React, { useState } from 'react';
import DeckOfCards from './components/DeckOfCards';
import PlayingCard from './components/PlayingCardClass';
import './cards.css';

const App: React.FC = () => {
  const [currentHand, setCurrentHand] = useState<PlayingCard[]>([]);

  const dealCards = () => {
    const deck = new DeckOfCards();
    const hand = deck.drawMultipleCards(5); 
    setCurrentHand(hand);
  };

  return (
    <div>
      {currentHand.length === 0 ? (
        <button onClick={dealCards}>Раздать карты</button>
      ) : (
        <div>
          <button onClick={dealCards}>Раздать карты</button>
          <div className="playingCards faceImages">
            {currentHand.map((card, index) => (
              <span
                key={index}
                className={`card rank-${card.value.toLowerCase()} ${card.symbol}`}
              >
                <span className="rank">{card.value}</span>
                <span className="suit">
                  {card.symbol === 'diams' && '♦'}
                  {card.symbol === 'hearts' && '♥'}
                  {card.symbol === 'clubs' && '♣'}
                  {card.symbol === 'spades' && '♠'}
                </span>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
