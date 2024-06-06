import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { decodeToken } from "../utils/decodeToken";
import { userT } from "../dto/userTypes";

const prisma = new PrismaClient();

export const dashboardData = async (req: Request, res: Response) => {
  try {
    const user: userT = (await decodeToken(req, res)) as userT;

    const garageCount = await prisma.garageMaster.aggregate({
      where: {
        is_deleted: false,
        users: {
          some: {
            id: user.id,
          },
        },
      },
      _count:{
        id:true
      }
    });
    res.send(garageCount);
  } catch (err: any) {
    res.status(500).send("Something went wrong: " + err.message);
  }
};
