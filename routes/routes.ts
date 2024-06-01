import express from "express";
import { getGarageList } from "../controllers/garageMasterControllers";
const router = express();

router.get("/garagelist", getGarageList);

export default router;
