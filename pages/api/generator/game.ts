import type { NextApiRequest, NextApiResponse } from 'next'
import {clearGames, generateGames} from '../../../data/game';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await clearGames();
  await generateGames();
  res.status(200).json({ name: 'Game - Generator Done' });
}