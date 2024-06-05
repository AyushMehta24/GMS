import express from "express";
import {
  addMember,
  createGarage,
  getGarageList,
} from "../controllers/garageMasterControllers";
import { createGarageValidate } from "../middlewears/garageValidations/createGarageValidator";
const garage = express();

garage.get("/list", getGarageList);
garage.post("/create", createGarageValidate, createGarage);
garage.post("/addmember", addMember);

export default garage;
