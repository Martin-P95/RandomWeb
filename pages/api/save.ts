import type { NextApiRequest, NextApiResponse } from "next";
import { Number, PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

type TokenData = {
  id: number;
};

type Data = {
  number: Number;
};

const save = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const prisma = new PrismaClient();

    if (req.headers.authorization) {
      const data = jwt.verify(
        req.headers.authorization.slice(7),
        process.env.JWT_SECRET!
      ) as TokenData;

      if (req.body.number) {
        const newNumber: Number | null = await prisma.number.create({
          data: { userId: data.id, number: req.body.number },
        });

        if (newNumber) {
          res.status(200).json({ number: newNumber });
        }
      }
    }
  } else {
    // Handle any other HTTP method
  }
};

export default save;
