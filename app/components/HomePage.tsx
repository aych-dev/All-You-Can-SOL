// import React from 'react';
// import { useWallet } from '@solana/wallet-adapter-react';

// export async function getData() {
//   let tokenList = [];
//   const url = `https://mainnet.helius-rpc.com/?api-key=9d62c6ca-3562-4cbb-bdbc-f6aac8797fab`;
//   const res = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       jsonrpc: '2.0',
//       id: 'my-id',
//       method: 'getAssetsByOwner',
//       params: {
//         ownerAddress: '2id39EuHEd6uLAHAGMCQt2LGfD2iMYikHFoES9Phokac',
//         page: 1, // Starts at 1
//         limit: 1000,
//       },
//     }),
//   });

//   return res.json();
// }

// const HomePage = async () => {
//   const data = await getData();
//   return (
//     <div>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default HomePage;
