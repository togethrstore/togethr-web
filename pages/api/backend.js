import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { price, battery, camera, performance, name, number } = req.body;

    try {
      const savedResponse = await prisma.userResponse.create({
        data: {
          price,
          battery,
          camera,
          performance,
          name,
          number,
        },
      });

      res.status(200).json(savedResponse);
    } catch (error) {
      console.error("Error saving response:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
