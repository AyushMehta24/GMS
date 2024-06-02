import express from "express";
import { getGarageList } from "../controllers/garageMasterControllers";
const router = express();

//auth
// router.post("/register", register);
// router.post("/login", login);

//garageMaster
router.get("/garagelist", getGarageList);

export default router;
