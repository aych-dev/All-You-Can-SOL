import React from 'react';
import Image, { StaticImageData } from 'next/image';
import dunkinLogo from '@/public/images/DunkinLogo.jpeg';
import madLadsLogo from '@/public/images/madLadsLogo.jpeg';
import teslaLogo from '@/public/images/teslaLogo.jpeg';

interface Props {
  tokenOwned: string[];
}

const RaffleCard = ({ tokenOwned }: Props) => {
  const raffles = [
    {
      title: '$100 Dunkin Gift Card',
      image: dunkinLogo,
      entries: 43,
      time: '2 HOURS',
    },
    {
      title: 'Tesla CyberTruck',
      image: teslaLogo,
      entries: 122,
      time: '1 HOURS',
    },
    {
      title: 'Mad Lads NFT',
      image: madLadsLogo,
      entries: 323,
      time: '5 HOURS',
    },
  ];

  const raffleElement = raffles.map((raffle, id) => {
    return (
      <div key={id} className='border border-green-300 p-3 m-2 flex flex-col'>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='text-center mb-5'>{raffle.title}</h3>
          <button
            className={`border border-white p-2 ${
              !tokenOwned[0] && 'text-red-600 font-bold opacity-50'
            }`}
            disabled={!tokenOwned[0]}
          >
            {tokenOwned[0] ? 'Enter Raffle' : 'Not Eligble'}
          </button>
        </div>
        <div className='flex items-center justify-center'>
          <Image
            src={raffle.image}
            alt='Raffle Logo'
            className=' rounded-full p-4 '
            height={300}
          />
        </div>
        <div className='flex justify-between mt-auto'>
          <p>{raffle.entries} Entries</p>
          <p>Raffle Ends In {raffle.time}</p>
        </div>
      </div>
    );
  });

  return <div className='border grid grid-cols-3 p-2'>{raffleElement}</div>;
};

export default RaffleCard;
