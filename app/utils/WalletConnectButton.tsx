import dynamic from 'next/dynamic';
import React from 'react';
const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

const WalletConnectButton = () => {
  return (
    <div>
      <WalletMultiButtonDynamic />
    </div>
  );
};

export default WalletConnectButton;
