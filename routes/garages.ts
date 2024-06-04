import express from "express";
import { addMember, createGarage, getGarageList } from "../controllers/garageMasterControllers";
const garage = express();


garage.get("/list", getGarageList);
garage.post("/create", createGarage);
garage.post("/addmember", addMember);

export default garage