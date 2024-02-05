// pages/api/getResponses.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const responses = await prisma.userResponse.findMany();

      res.status(200).json(responses);
    } catch (error) {
      console.error('Error fetching responses:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
