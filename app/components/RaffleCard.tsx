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
        <h3 className='text-center'>Title</h3>
        <button className='border border-white p-2'>
          {tokenOwned[0] ? 'Enter Raffle' : 'Not Eligble'}
        </button>
      </div>
      <div>
        <Image
          src={dunkinLogo}
          alt='Dunkin Donuts Logo'
          className='flex items-center justify-center rounded-full p-2'
        />
      </div>
      <div className='flex justify-between'>
        <p>Entries</p>
        <p>Time Left</p>
      </div>
    </div>
  );
};

export default RaffleCard;
