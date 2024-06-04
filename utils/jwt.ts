import jwt from "jsonwebtoken";

export const generateToken = (user: any) => {
  const payload = {
    id: user.id,
    email: user.email,
  };
  return jwt.sign(payload, process.env.JWT_SECRET || "secret", {
    expiresIn: "1h",
  });
};
