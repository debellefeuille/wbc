import type { NextApiRequest, NextApiResponse } from 'next'
import { clearYears, generateYears } from '../../../data/year';
import { clearGames, generateGames } from '../../../data/game';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await clearYears();
  await clearGames();
  await generateYears();
  await generateGames();
  res.status(200).json({ name: 'Generator Done' });
}
