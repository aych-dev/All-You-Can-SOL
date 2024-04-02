import React from 'react';
import RaffleCard from '../components/RaffleCard';

const getData = async () => {
  const url = `https://mainnet.helius-rpc.com/?api-key=9d62c6ca-3562-4cbb-bdbc-f6aac8797fab`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'my-id',
      method: 'getAssetsByOwner',
      params: {
        ownerAddress: '2id39EuHEd6uLAHAGMCQt2LGfD2iMYikHFoES9Phokac',
        page: 1, // Starts at 1
        limit: 1000,
      },
    }),
  });
  return res.json();
};

const Assets = async () => {
  const data = await getData();

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* <div className='border grid grid-cols-4 p-2'>
        <div className='p-2'>
          <RaffleCard />
        </div>
        <div className='p-2'>
          <RaffleCard />
        </div>
        <div className='p-2'>
          <RaffleCard />
        </div>
        <div className='p-2'>
          <RaffleCard />
        </div>
        <div className='p-2'>
          <RaffleCard />
        </div>
        <div className='p-2'>
          <RaffleCard />
        </div>
        <div className='p-2'>
          <RaffleCard />
        </div>
        <div className='p-2'>
          <RaffleCard />
        </div>
      </div>
      <div className=' border p-2 border-orange-300'>test</div> */}
    </>
  );
};

export default Assets;
