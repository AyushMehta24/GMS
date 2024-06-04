import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const registerValidate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const passPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/;

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const result = Joi.object().keys({
    name: Joi.string().min(0).required(),
    password: Joi.string().regex(passPattern).required(),
    email: Joi.string().regex(emailPattern).required(),
    role: Joi.string().regex(/^[0-1]{1}$/).required(),
  });

  const valid = result.validate(req.body);
  if (valid.error != null) {
    return res.json({ message: valid.error.details[0].message });
  }
  next();
};

export const loginValidate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const passPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/;

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const result = Joi.object().keys({
    email: Joi.string().regex(emailPattern).required(),
    password: Joi.string().regex(passPattern),
  });

  const valid = result.validate(req.body);
  if (valid.error != null) {
    return res.json({ message: valid.error.details[0].message });
  }
  next();
};
