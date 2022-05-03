import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import type { User } from "../../types/user";
import jwt from "jsonwebtoken";

type Data = {
  token: string;
};
type Body = {
  username: string;
  password: string;
  passwordrepeat: string;
};
const register = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const data: Body = req.body;
    const prisma = new PrismaClient();

    const newUser: User = await prisma.user.create({
      data: {
        username: data.username,
        password: data.password,
      },
    });

    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET!, {
      expiresIn: "90d",
    });
    res.status(200).json({ token });
  } else {
    // Handle any other HTTP method
  }
};

export default register;
