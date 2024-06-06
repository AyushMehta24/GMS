import express from "express";
import { initialuserInfo } from "../controllers/garageMasterControllers";
import garage from "./garages";
import { dashboardData } from "../controllers/dashboardControllers";
const owner = express();

//initial User Information
owner.get("/userinfo", initialuserInfo);

//Garage List Information

owner.use("/garage", garage);

//Dashboard

owner.get("/dashboard" , dashboardData)

export default owner;
