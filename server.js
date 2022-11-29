import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
const app = express();
const PORT = process.env.PORT || 8000;

//middlewares
app.use(morgan("dev")); // logs all theincoming req information
//app.use(helmet())  // etting default security headers to protect some attack
app.use(cors()); //  allow cross origin esources
app.use(express.json()); // convert income data in the req.

//mongoDB connect
import { connectDB } from "./src/config/dbConfig.js";
connectDB();

//routers
import userRouter from "./src/routers/userRouter.js";
app.use("/api/v1/user", userRouter);

//catch when router is not found
app.use("*", (req, res, next) => {
  const error = {
    message: "404 page not found!",
    code: 200,
  };
  next(error);
});

//global error handler
app.use((error, req, res, next) => {
  const code = error.code || 500;
  res.status(code).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`your server is ready at http://localhost:${PORT}`);
});
