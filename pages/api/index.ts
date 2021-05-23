import nc from 'next-connect';
import type { NextApiResponse } from 'next';

const handler = nc().get((_, res: NextApiResponse) => {
  res.status(200).json({ text: 'Welcome!' });
});

export default handler;
