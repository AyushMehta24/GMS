import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { garageMasterT } from "../types/garageMasterT";
import { decodeToken } from "../utils/decodeToken";
import { initialData, userT } from "../dto/userTypes";

const prisma = new PrismaClient();

export const createGarage = async (req: Request, res: Response) => {
  try {
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
      },
    });
    res.send("User inserted successfully");
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
    console.log(user, "uswerinfo");
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
