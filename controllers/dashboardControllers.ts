import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { decodeToken } from "../utils/decodeToken";
import { userT } from "../dto/userTypes";
import { timeDifference } from "../utils/timeDiffrence";

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
      _count: {
        id: true,
      },
    });

    const customerCount: number = 13;
    const staffCount: number = 6;
    const servicesCount: number = 10;
    const revenue: number = 20000;
    const joinedCount: { created_at: Date } | null =
      await prisma.user.findUnique({
        where: {
          id: user.id,
          is_deleted: false,
        },
        select: {
          created_at: true,
        },
      });

    const sinceJoined: string = timeDifference(
      Number(joinedCount?.created_at.getTime())
    );

    res.status(200).send({
      statistics: {
        garageCount: garageCount._count.id,
        customerCount,
        staffCount,
        servicesCount,
        revenue,
        sinceJoined,
      },
      success: true,
    });
  } catch (err: any) {
    res.status(500).send("Something went wrong: " + err.message);
  }
};
