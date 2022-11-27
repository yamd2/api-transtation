import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
const app = express();
const PORT = process.env.PORT || 8000;

//middlewares
app.use(morgan("dev")); // logs all theincoming req information
//app.use(helmet())  // etting default security headers to protect some attack
//app.use(cors())    //  allow cross origin esources
app.use(express.json()); // convert income data in the req.

import { connectDB } from "./src/config/dbConfig.js";
connectDB();

app.use("*", (req, res) => {
  res.json({
    message: "you are in wrong place, Yo, go back!",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`your server is ready at http://localhost:${PORT}`);
});
