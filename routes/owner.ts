import express from "express";
import { initialuserInfo } from "../controllers/garageMasterControllers";
import garage from "./garages";
const owner = express();

//initial User Information
owner.get("/userinfo", initialuserInfo);

//Garage List Information

owner.use("/garage", garage);

export default owner;
