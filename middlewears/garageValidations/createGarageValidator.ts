import Joi from "joi";
import { NextFunction, Request, Response } from "express";
import { createGarageT } from "../../dto/garageTypes";

export const createGarageValidate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    name,
    contact,
    email,
    thumbnail,
    open_time,
    close_time,
    description,
    status,
    latitude,
    longitude,
  } = req.body;

  const data: createGarageT = {
    name,
    contact,
    email,
    thumbnail,
    open_time,
    close_time,
    description,
    status,
    latitude,
    longitude,
  };

  const result = Joi.object().keys({
    name: Joi.string().min(5).max(50).required(),
    contact: Joi.string()
      .length(10)
      .pattern(/[1-9]{1}[0-9]{9}/)
      .required(),
    email: Joi.string().email().required(),
    thumbnail: Joi.string().min(1),
    open_time: Joi.string().min(8).max(8).required(),
    close_time: Joi.string().min(8).max(8).required(),
    description: Joi.string().min(0).max(100).required(),
    status: Joi.boolean().required(),
    longitude: Joi.number().precision(8).required(),
    latitude: Joi.number().precision(8).required(),
  });

  const valid = result.validate(data);
  if (valid.error != null) {
    return res.json({ message: valid.error.details[0].message });
  }
  next();
};
