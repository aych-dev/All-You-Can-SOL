'use client';

import React, { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { getData } from './getData';

export default function Home() {
  const wallet = useWallet();
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(wallet.publicKey?.toBase58());
      setResult(data);
    };
    fetchData();
  }, [wallet.publicKey]);

  return (
    <>
      <div>{result}</div>
    </>
  );
}
