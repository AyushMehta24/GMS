import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { garageMasterT } from "../types/garageMasterT";

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

export const getGarage = async (req: Request, res: Response) => {
  try {
    const garages:garageMasterT[] = await prisma.garageMaster.findMany({
      select: {
        name: true,
        contact: true,
        email: true,
        thumbnail: true,
        open_time: true,
        close_time: true,
        description: true,
        status: true,
      },
    });
    res.json(garages);
  } catch (err: any) {
    res.status(500).send("Something went wrong: " + err.message);
  }
};
