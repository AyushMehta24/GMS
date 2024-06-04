import express from "express";
const auth = express();
import { login, register } from "../controllers/authControllers";
import { loginValidate, registerValidate } from "../middlewears/authValidtion";

auth.post("/register", registerValidate, register);
auth.post("/login", loginValidate, login);

export default auth;
