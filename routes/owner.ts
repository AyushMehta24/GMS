import express from "express";
import { getGarageList } from "../controllers/garageMasterControllers";
const owner = express();

owner.get("/garagelist", getGarageList);

export default owner;
