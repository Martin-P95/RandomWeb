import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import type { User } from "../../types/user";
import jwt from "jsonwebtoken";

type TokenData = {
  id: number;
};

type Data = {
  user: User;
};

const login = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const prisma = new PrismaClient();

    if (req.headers.authorization) {
      const data = jwt.verify(req.headers.authorization.slice(7), process.env.JWT_SECRET!) as TokenData;
      const getUser: User | null = await prisma.user.findUnique({
        where: {
          id: data.id,
        },
      });

      if (getUser) {
        res.status(200).json({ user: getUser });
      }
    }
  } else {
    // Handle any other HTTP method
  }
};

export default login;
