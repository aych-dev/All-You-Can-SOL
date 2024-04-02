'use server';

export async function getData(owner: string) {
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
        ownerAddress: owner,
        page: 1, // Starts at 1
        limit: 1000,
      },
    }),
  });
  const { result } = await res.json();
  console.log(result);
  return result;
}
