import express, { Router, urlencoded } from "express";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import route from "./routes/routes";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", route);

app.listen(process.env.PORT, () => {
  console.log("server is running on " + process.env.PORT);
});
