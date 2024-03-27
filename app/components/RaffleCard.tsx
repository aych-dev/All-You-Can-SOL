import { NextResponse } from 'next/server';
import React from 'react';

const RaffleCard = () => {
  return (
    <div className='border border-green-400 p-3 flex flex-col'>
      <div className='flex flex-col items-center justify-center'>
        <button className='rounded p-2 border'>CLICK</button>
        <h3>Tesla CyberTruck</h3>
        <h4>Enter Raffle</h4>
      </div>
      <div>
        <div className='flex items-center justify-center'>IMAGE</div>
      </div>
      <div className='flex justify-between'>
        <p>How Many Entered</p>
        <p>Time Left To Enter</p>
      </div>
    </div>
  );
};

export default RaffleCard;
