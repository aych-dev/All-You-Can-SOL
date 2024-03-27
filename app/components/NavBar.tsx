import React from 'react';
import WalletConnectButton from '../utils/WalletConnectButton';

const NavBar = () => {
  return (
    <div className='bg-customNav flex justify-between p-4 text-customText'>
      <div className='flex items-center space-x-4'>
        <p>spot a</p>
        <p>spot b</p>
        <p>spot c</p>
      </div>
      <div>
        <WalletConnectButton />
      </div>
    </div>
  );
};

export default NavBar;
