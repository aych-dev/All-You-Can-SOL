import {
  WalletProvider,
  ConnectionProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
  AlphaWalletAdapter,
  LedgerWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { useMemo } from 'react';

import '@solana/wallet-adapter-react-ui/styles.css';
import '../styles/globals.css';

type Props = {
  children?: React.ReactNode;
};

export default function Wallet({ children }: Props) {
  const endpoint = 'https://fancy-daphna-fast-mainnet.helius-rpc.com/';
  const wallets = useMemo(
    () => [
      new SolflareWalletAdapter(),
      new AlphaWalletAdapter(),
      new LedgerWalletAdapter(),
    ],
    []
  );

  return (
    <>
      <WalletProvider wallets={wallets} autoConnect>
        <ConnectionProvider endpoint={endpoint}>
          <WalletModalProvider>{children}</WalletModalProvider>
        </ConnectionProvider>
      </WalletProvider>
    </>
  );
}
