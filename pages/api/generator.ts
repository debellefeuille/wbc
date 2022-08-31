// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {clearYears, generateYears} from '../../data/year';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await clearYears();
  await generateYears();
  res.status(200).json({ name: 'Generator Done' });
}
