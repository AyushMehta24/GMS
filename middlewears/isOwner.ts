import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const isOwner = async (req: Request, res: Response, next: NextFunction) => {
  const token: string = req.headers.authorization?.split(" ")[1] as string;

  jwt.verify(
    token,
    process.env.JWT_SECRET || "secret",
    async (err: any, decoded: any) => {
      if (decoded.role !== "1") {
        return res
          .status(401)
          .json({ message: "Unauthorized", success: false });
      }
      next();
    }
  );
};

export default isOwner;
