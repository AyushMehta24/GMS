import express from "express";
import { getGarageList } from "../controllers/garageMasterControllers";
import { login, register } from "../controllers/authControllers";
import passport from "passport";
import jwtFromCookie from "../middlewears/jwtFromCookie";
import { loginValidate, registerValidate } from "../middlewears/authValidtion";
const router = express();

//auth
router.post("/auth/register",registerValidate, register);
router.post("/auth/login",loginValidate, login);

//garageMaster
router.get("/garagelist", jwtFromCookie, getGarageList);

export default router;
