import express from "express";
import { getGarageList,initialuserInfo } from "../controllers/garageMasterControllers";
const owner = express();

//initial User Information
owner.get("/userinfo" , initialuserInfo)

//Garage List Information
owner.get("/garagelist", getGarageList);

export default owner;
