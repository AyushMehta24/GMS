import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { garageMasterT } from "../types/garageMasterT";
import { decodeToken } from "../utils/decodeToken";
import { initialData, userT } from "../dto/userTypes";

const prisma = new PrismaClient();

export const createGarage = async (req: Request, res: Response) => {
  try {
    const user: userT = (await decodeToken(req, res)) as userT;

    const {
      name,
      contact,
      email,
      thumbnail,
      open_time,
      close_time,
      description,
      status,
    } = req.body;
    await prisma.garageMaster.create({
      data: {
        name: name,
        contact: contact,
        email: email,
        thumbnail: thumbnail,
        open_time: open_time,
        close_time: close_time,
        description: description,
        status: status,
        users: {
          connect: {
            id: user.id,
          },
        },
      },
    });
    res.send("Garage inserted successfully");
  } catch (err: any) {
    res.status(500).send("Something went wrong: " + err.message);
  }
};

export const getGarageList = async (req: Request, res: Response) => {
  try {
    const garages: garageMasterT[] = await prisma.garageMaster.findMany({
      select: {
        id: true,
        name: true,
        contact: true,
        email: true,
        thumbnail: true,
        open_time: true,
        close_time: true,
        description: true,
        status: true,
      },
      where: {
        is_deleted: false,
      },
    });
    res.json({ list: garages });
  } catch (err: any) {
    res.status(500).send("Something went wrong: " + err.message);
  }
};

export const initialuserInfo = async (req: Request, res: Response) => {
  try {
    const user: userT = (await decodeToken(req, res)) as userT;
    const initialData: initialData | null = await prisma.user.findUnique({
      where: {
        id: user.id,
        is_deleted: false,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        profile_pic: true,
      },
    });
    res.status(200).json({ userinfo: initialData });
  } catch (err: any) {
    res.status(500).send("Something went wrong: " + err.message);
  }
};

export const addMember = async (req: Request, res: Response) => {
  try {
    const { ownerId, garageId }: { ownerId: string; garageId: string } =
      req.body;

    const validOwner: { id: string } | null = await prisma.user.findUnique({
      where: {
        id: ownerId,
        is_deleted: false,
        role:"1"
      },
      select: {
        id: true,
      },
    });

    const validGarage: { id: string } | null =
      await prisma.garageMaster.findUnique({
        where: {
          id: garageId,
          is_deleted: false,
        },
        select: {
          id: true,
        },
      });

    if (validOwner && validGarage) {
      await prisma.garageMaster.update({
        where :{
          id : garageId
        },
        data:{
          users :{
            connect : {
              id : ownerId
            }
          }
        }
      })
      res.send("Owner added successfully");

    } else {
      return res.status(500).send("Data is not valid");
    }
  } catch (err: any) {
    res.status(500).send("Something went wrong: " + err.message);
  }
};
