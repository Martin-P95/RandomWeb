import type { NextApiRequest, NextApiResponse } from "next";
import { Number, PrismaClient } from "@prisma/client";

type Data = {
  number: Number;
};

const save = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const prisma = new PrismaClient();
    if (req.body.id) {
      const deleteNumber = await prisma.number.delete({
        where: {
          id: req.body.id,
        },
      });

      if (deleteNumber) {
        res.status(200).json({ number: deleteNumber });
      }
    }
  } else {
    // Handle any other HTTP method
  }
};

export default save;