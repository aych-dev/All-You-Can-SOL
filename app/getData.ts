'use server';

export async function getData(owner: string) {
  let tokenList: string[] = [];
  const url = `https://solana-mainnet.rpc.extrnode.com/fa638cba-144e-4bbf-960d-85a14d1a0fb7`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'my-id',
      method: 'searchAssets',
      params: {
        ownerAddress: owner,
        grouping: ['collection', 's4ib7JZdaVcqKxdqviVrunWy5XXjpdEgLLXnWkiuEvv'],
        page: 1, // Starts at 1
        limit: 1000,
      },
    }),
  });

  const { result } = await res.json();
  console.log('NFTs owned:', result);

  if (!result) {
    return;
  } else {
    tokenList.push(result.total);
  }

  return tokenList;
}
