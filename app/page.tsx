'use client';

import React, { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { getData } from './getData';
import { divideAmount } from '@metaplex-foundation/umi';

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

  if (!wallet.publicKey) {
    return <div>connect wallet</div>;
  }
  let resultElement;

  if (!result) {
    return;
  } else {
    resultElement = result.map((item) => {
      return <p>{item}</p>;
    });
  }

  return <>{resultElement}</>;
}
