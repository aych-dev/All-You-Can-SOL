import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

const HomePage = () => {
  const wallet = useWallet();

  if (!wallet.publicKey) {
    return (
      <div className='flex items-center justify-center'>Connect Wallet</div>
    );
  }
};

export default HomePage;
