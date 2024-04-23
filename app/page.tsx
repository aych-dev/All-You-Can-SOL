'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { getData } from './getData';
import RaffleCard from './components/RaffleCard';
import { toast } from 'react-toastify';
import { fetcher } from './utils/use-data-fetch';
import { Transaction } from '@solana/web3.js';
import { SignCreateData } from './api/sign/create';
import { SignValidateData } from './api/sign/validate';

export default function Home() {
  const wallet = useWallet();
  const [tokenOwned, setTokenOwned] = useState<string[]>([]);
  const [signState, setSignState] = useState<ButtonState>('initial');
  const prevPublicKey = useRef<string>(wallet.publicKey?.toBase58()!);

  type ButtonState = 'initial' | 'loading' | 'success' | 'error';

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

  // Reset state if wallet changes or disconnects
  useEffect(() => {
    if (
      wallet.publicKey &&
      wallet.publicKey.toBase58() !== prevPublicKey.current
    ) {
      prevPublicKey.current === wallet.publicKey.toBase58();
      setSignState('initial');
    }
  }, [wallet.publicKey]);

  const onSignClick = async () => {
    if (wallet.publicKey && wallet.signTransaction && signState === 'initial') {
      setSignState('loading');
      const signToastId = toast.loading('Signing message...');

      try {
        // Request signature tx from server
        const { tx: createTx } = await fetcher<SignCreateData>(
          '/api/sign/create',
          {
            method: 'POST',
            body: JSON.stringify({
              publicKeyStr: wallet.publicKey.toBase58(),
            }),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
          }
        );

        const tx = Transaction.from(Buffer.from(createTx, 'base64'));

        // Request signature from wallet
        const signedTx = await wallet.signTransaction(tx);

        // Validate signed transaction
        await fetcher<SignValidateData>('/api/sign/validate', {
          method: 'POST',
          body: JSON.stringify({
            signedTx: signedTx.serialize().toString('base64'),
          }),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });

        setSignState('success');
        toast.success('Message signed', { toastId: signToastId });
      } catch (error: any) {
        setSignState('error');
        toast.error('Error verifying wallet, please reconnect wallet', {
          toastId: signToastId,
        });
      }
    }
  };

  if (!wallet.publicKey) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='border p-12 flex flex-col items-center justify-center mx-3'>
          <h2>AYCS</h2>
          <p>Free Stuff For Owning A Solana NFT</p>
          <h3>Connect Wallet To Begin</h3>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* <RaffleCard tokenOwned={tokenOwned} /> */}
      <div className='flex items-center justify-center'>
        <button
          onClick={onSignClick}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Verify Wallet
        </button>
      </div>
    </>
  );
}
