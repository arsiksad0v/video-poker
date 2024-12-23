import React from 'react';

type PlayingCardProps = {
  value: string;
  symbol: 'diams' | 'hearts' | 'clubs' | 'spades';
};

const symbolIcons = {
  diams: '♦',
  hearts: '♥',
  clubs: '♣',
  spades: '♠',
};

const PlayingCardComponent: React.FC<PlayingCardProps> = ({ value, symbol }) => {
  return (
    <span className={`card rank-${value.toLowerCase()} ${symbol}`}>
      <span className="rank">{value}</span>
      <span className="suit">{symbolIcons[symbol]}</span>
    </span>
  );
};

export default PlayingCardComponent;