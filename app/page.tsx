'use client';

import React, { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { getData } from './getData';
import RaffleCard from './components/RaffleCard';

export default function Home() {
  const wallet = useWallet();
  const [tokenOwned, setTokenOwned] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(wallet.publicKey?.toBase58()!);
        if (!data) {
          throw new Error('Data is undefined');
        }
        setTokenOwned(data);
      } catch (error) {
        console.error('could not fetch data');
      }
    };
    fetchData();
  }, [wallet.publicKey]);

  if (!wallet.publicKey) {
    return (
      <div className='flex items-center justify-center'>Connect Wallet</div>
    );
  }

  return (
    <>
      <div className='border grid grid-cols-4 p-2'>
        <div className='p-2'>
          <RaffleCard tokenOwned={tokenOwned} />
        </div>
      </div>
      <div className=' border p-2 border-orange-300'>test</div>
    </>
  );
}
