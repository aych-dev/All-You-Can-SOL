import React from 'react';
import RaffleCard from './RaffleCard';
import { useWallet } from '@solana/wallet-adapter-react';
import { publicKey } from '@metaplex-foundation/umi';

const HomePage = () => {
  const wallet = useWallet();

  if (!wallet.publicKey) {
    return (
      <div className='flex items-center justify-center'>Connect Wallet</div>
    );
  }

  let walletString = publicKey(wallet.publicKey);

  return (
    <>
      <div className='border grid grid-cols-4 p-2'>
        <div className='p-2'>
          <RaffleCard />
        </div>
        <div className='p-2'>
          <RaffleCard />
        </div>
        <div className='p-2'>
          <RaffleCard />
        </div>
        <div className='p-2'>
          <RaffleCard />
        </div>
        <div className='p-2'>
          <RaffleCard />
        </div>
        <div className='p-2'>
          <RaffleCard />
        </div>
        <div className='p-2'>
          <RaffleCard />
        </div>
        <div className='p-2'>
          <RaffleCard />
        </div>
      </div>
      <div className=' border p-2 border-orange-300'>test</div>
    </>
  );
};

export default HomePage;
