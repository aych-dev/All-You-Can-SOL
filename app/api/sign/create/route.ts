import {
  Connection,
  PublicKey,
  Transaction,
  TransactionInstruction,
} from '@solana/web3.js';
import { NextApiRequest, NextApiResponse } from 'next';
import { MEMO_PROGRAM_ID, NONCE } from '@/app/utils/global';
import { NextResponse } from 'next/server';

export type SignCreateData = {
  tx: string;
};

export default async function POST(req: NextApiRequest) {
  if (req.method === 'POST') {
    const { publicKeyStr } = req.body;

    const connection = new Connection(
      'https://solana-mainnet.rpc.extrnode.com/fa638cba-144e-4bbf-960d-85a14d1a0fb7'
    );
    const publicKey = new PublicKey(publicKeyStr);

    // Ideally this would be stored in a DB for each publicKey
    // using something like crypto.randomBytes(16).toString("base64");
    const nonce = NONCE || '';

    const tx = new Transaction();
    tx.add(
      new TransactionInstruction({
        programId: MEMO_PROGRAM_ID,
        keys: [],
        data: Buffer.from(nonce, 'utf8'),
      })
    );

    const blockHash = (await connection.getLatestBlockhash('finalized'))
      .blockhash;

    tx.feePayer = publicKey;
    tx.recentBlockhash = blockHash;

    const serializedTransaction = tx.serialize({
      requireAllSignatures: false,
      verifySignatures: true,
    });

    const txBase64 = serializedTransaction.toString('base64');

    return NextResponse.json({ tx: txBase64 });
  } else {
    NextResponse.json({ tx: '' });
  }
}
