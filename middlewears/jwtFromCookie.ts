import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const jwtFromCookie = (req: Request, res: Response, next: NextFunction) => {
  const token: string = req.headers.authorization?.split(" ")[1] as string;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized", success: false });
  }
  jwt.verify(
    token,
    process.env.JWT_SECRET || "secret",
    async (err: any, decoded: any) => {
      req.user = decoded; // Attach user information to the request object
      if (err) {
        return res
          .status(401)
          .json({ message: "Unauthorized", success: false });
      }
      const userData: { id: string; role: string } | null =
        await prisma.user.findUnique({
          where: {
            id: decoded.id,
            role: decoded.role,
          },
          select: {
            id: true,
            role: true,
          },
        });
      if (userData !== null) {
        next();
      } else {
        return res
          .status(401)
          .json({ message: "Unauthorized", success: false });
      }
    }
  );
};

export default jwtFromCookie;
