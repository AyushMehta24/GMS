import express, { Router, urlencoded } from "express";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import route from "./routes/routes";
import cors from "cors";
import cookieParser from "cookie-parser";
import passport from "passport";

// import cookieParser from "cookie-parser";

const app = express();
app.use(cors({origin : "*" , credentials:true}));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(passport.initialize());

app.use("/", route);

app.listen(process.env.PORT, (): void => {
  console.log("server is running on " + process.env.PORT);
});
