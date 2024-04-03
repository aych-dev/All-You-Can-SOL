'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: true }
);

const NavBar = () => {
  return (
    <div className='bg-customNav flex justify-between p-4 text-customText'>
      <div className='flex items-center space-x-4'>
        <p>spot a</p>
        <p>spot b</p>
        <p>spot c</p>
      </div>
      <div>
        <WalletMultiButtonDynamic>Connect Wallet</WalletMultiButtonDynamic>
      </div>
    </div>
  );
};

export default NavBar;
