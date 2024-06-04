import express from "express";
import jwtFromCookie from "../middlewears/jwtFromCookie";
import isOwner from "../middlewears/isOwner";
import auth from "./auth";
import owner from "./owner";
const router = express();

//auth
router.use("/auth", auth);

//owner
router.use("/owner", jwtFromCookie, isOwner, owner);

//customer

export default router;
