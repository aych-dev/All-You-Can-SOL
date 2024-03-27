import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { publicKey } from '@metaplex-foundation/umi';
import HomePage from './components/HomePage';
export default function Home() {
  const wallet = useWallet();

  if (!wallet.publicKey) {
    return <div className='flex items-center justify-center'>HOME</div>;
  }

  let walletString = publicKey(wallet.publicKey);

  return (
    <div>
      <HomePage />
      <p>{walletString}</p>
    </div>
  );
}
