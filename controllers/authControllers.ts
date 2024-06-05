import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const generateToken = (user: any) => {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };
  return jwt.sign(payload, process.env.JWT_SECRET || "secret", {
    expiresIn: "1h",
  });
};

export const register = async (req: Request, res: Response) => {
  const {
    email,
    password,
    name,
    role,
  }: { email: string; password: string; name: string; role: string } = req.body;
  try {
    const hashedPassword: string = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role,
      },
    });
    res
      .status(201)
      .json({ message: "User Registered Successfully", success: true });
  } catch (error) {
    res.status(400).json({ error: "Error registering user" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user: {
      email: string;
      password: string;
      role: string;
      id:string
    } | null = await prisma.user.findUnique({
      where: { email },
      select: {
        id:true,
        email: true,
        password: true,
        role: true,
      },
    });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res
        .status(401)
        .json({ message: "Invalid email or password", success: false });
    }
    const token: string = generateToken(user);

    // Set token in cookie
    // res.cookie("jwt", token, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   maxAge: 3600000, // 1 hour
    // });

    res
      .status(200)
      .json({
        message: "Logged in successfully",
        token: token,
        success: true,
        role: user.role,
      });
  } catch (error) {
    res.status(400).json({ error: "Error logging in" });
  }
};
