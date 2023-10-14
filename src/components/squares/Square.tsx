import React, { FC, MouseEvent } from 'react';
import { GiCrossMark, GiEmptyChessboard } from 'react-icons/gi';
import { BsCircle } from 'react-icons/bs';

interface Props {
  type: string;
  position: number;
  handleClick: (position: number) => void;
}

const Square: FC<Props> = ({ type, handleClick, position }) => {
  const isCross = type === 'X';
  const isCircle = type === 'O';
  const isEmpty = type === '';
  return (
    <div
      className='flex justify-center items-center border-2 border-white w-28 h-28 border-r-2 rounded-lg cursor-pointer'
      onClick={(event: MouseEvent) => handleClick(position)}
    >
      {isCross && <GiCrossMark className='text-3xl	' />}
      {isCircle && <BsCircle className='text-3xl	' />}
      {isEmpty && <GiEmptyChessboard className='text-3xl' />}
    </div>
  );
};

export default Square;
