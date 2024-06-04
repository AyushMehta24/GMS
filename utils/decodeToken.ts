import jwt, { JwtPayload, VerifyErrors } from "jsonwebtoken";
import { Request, Response } from "express";

export const decodeToken = async(req: Request, res: Response) => {
  const token: string = String(req.headers.authorization?.split(" ")[1]);
 const decodedData = await new Promise((resolve, reject) => {
    jwt.verify(
      token,
      process.env.JWT_SECRET || "secret",
      async (
        err: VerifyErrors | null,
        decoded: string | JwtPayload | undefined
      ) => {
        if (err) {
          reject(err);
          return res
            .status(401)
            .json({ message: "Unauthorized", success: false });
        }
        resolve(decoded);
      }
    );
  });
  return decodedData
};
