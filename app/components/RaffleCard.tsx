import React from 'react';
import Image from 'next/image';
import dunkinLogo from '@/public/images/DunkinLogo.jpeg';

interface Props {
  tokenOwned: string[];
}

const RaffleCard = ({ tokenOwned }: Props) => {
  return (
    <div className='border border-green-300 p-3 flex flex-col'>
      <div className='flex flex-col items-center justify-center'>
        <h3 className='text-center mb-5'>$1000 Dunkin Gift Card</h3>
        <button
          className={`border border-white p-2 ${
            !tokenOwned[0] && 'text-red-600 font-bold opacity-50'
          }`}
          disabled={!tokenOwned[0]}
        >
          {tokenOwned[0] ? 'Enter Raffle' : 'Not Eligble'}
        </button>
      </div>
      <div>
        <Image
          src={dunkinLogo}
          alt='Dunkin Donuts Logo'
          className='flex items-center justify-center rounded-full p-4'
        />
      </div>
      <div className='flex justify-between mt-3'>
        <p>69 Entries</p>
        <p>Raffle Ends In 2 Hours</p>
      </div>
    </div>
  );
};

export default RaffleCard;
