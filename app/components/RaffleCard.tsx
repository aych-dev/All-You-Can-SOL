import React from 'react';

interface Props {
  tokenOwned: string[];
}

const RaffleCard = ({ tokenOwned }: Props) => {
  return (
    <div className='border border-green-300 p-3 flex flex-col'>
      <div className='flex flex-col items-center justify-center'>
        <h3>Tesla CyberTruck</h3>
        <button className='border border-white p-2'>
          {tokenOwned} NFTs Owned
        </button>
      </div>
      <div>
        <div className='flex items-center justify-center'>IMAGE</div>
      </div>
      <div className='flex justify-between'>
        <p>How Many Entered</p>
        <p>Time Left To Enter</p>
      </div>
    </div>
  );
};

export default RaffleCard;
