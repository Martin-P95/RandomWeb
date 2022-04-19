import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import type { User } from "../../types/user";
import { get } from "http";

type Data = {
  name: string;
};
type Body = {
  username: string;
  password: string;
};
export default async (req: NextApiRequest, res: NextApiResponse<User>) => {
  if (req.method === "POST") {
    const data: Body = req.body;
    const prisma = new PrismaClient();

    const getUser: User | null = await prisma.user.findUnique({
      where: {
        username: data.username,
      },
    });

    if (getUser && getUser.password === data.password) {
      res.status(200).json(getUser);
    }
  } else {
    // Handle any other HTTP method
  }
};
