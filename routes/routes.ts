import express from "express";
import { getGarageList } from "../controllers/garageMasterControllers";
import passport from "passport";
import jwtFromCookie from "../middlewears/jwtFromCookie";
import isOwner from "../middlewears/isOwner";
import auth from "./auth";
import owner from "./owner";
const router = express();

//auth
router.use("/auth", auth);

//owner
router.use("/", jwtFromCookie, isOwner, owner);

//customer

export default router;
