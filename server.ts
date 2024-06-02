import express, { Router, urlencoded } from "express";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import route from "./routes/routes";
import cors from "cors";

// import cookieParser from "cookie-parser";

const app = express();
app.use(cors());

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// app.use(cookieParser());
// app.use(passport.initialize());

app.use("/", route);

// app.use("/api/auth", authRoutes);

// // Example protected route in the garage management system
// app.use(
//   "/api/garage",
//   passport.authenticate("jwt", { session: false }),
//   garageRoutes
// );

app.listen(process.env.PORT, () => {
  console.log("server is running on " + process.env.PORT);
});
