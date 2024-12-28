import { NextApiRequest, NextApiResponse } from 'next';
import { StormglassService } from '@/services/StormglassService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const stormglass = new StormglassService(process.env.STORMGLASS_API_KEY!);

  try {
    const conditions = await stormglass.getMarineConditions(0, 0); // Replace with actual coordinates
    res.status(200).json(conditions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch conditions' });
  }
}