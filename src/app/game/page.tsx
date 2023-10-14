'use client';

import { useEffect, useState } from 'react';
import './game.css';

import Square from '@/components/squares/Square';
import { toast } from 'react-toastify';

export default function Game() {
  const [squares, setSquares] = useState<string[]>([]);
  const [isYourTurn, setIsYourTurn] = useState<boolean>(true);

  const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkForWin = (player: string): boolean => {
    for (const combo of winningCombo) {
      const [a, b, c] = combo;
      if (
        squares[a] === player &&
        squares[b] === player &&
        squares[c] === player
      ) {
        return true; // The player has won
      }
    }
    return false; // No win found
  };

  const initializeGame = () => {
    const initialSquareValue: string[] = Array.from({ length: 9 }).map(
      () => ''
    );
    setSquares(initialSquareValue);
  };

  const handleClick = (position: number) => {
    if (squares[position] === '') {
      const newSquares = [...squares];
      newSquares[position] = 'X';
      setSquares(newSquares);
    } else {
      toast.warn('Already selected', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  useEffect(() => {
    initializeGame();
  }, []);

  return (
    <div className='game-base flex justify-center items-center'>
      <div>
        <h2 className='text-2xl text-center mb-4'>
          {squares.length > 0 && (isYourTurn ? 'Your turn' : "Opponent's turn")}
        </h2>
        <div className='grid grid-cols-3 grid-rows-3 gap-1'>
          {squares.length > 0
            ? squares.map((value, index) => (
                <Square
                  key={`square-${index + 100}`}
                  type={value}
                  position={index}
                  handleClick={handleClick}
                />
              ))
            : null}
        </div>
      </div>

      {squares.length === 0 && (
        <h1 className='text-3xl text-center animate-pulse	'>
          Initializing game...
        </h1>
      )}
    </div>
  );
}
