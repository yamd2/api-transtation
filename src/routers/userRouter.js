import express from "express";
import { insertUser } from "../models/user/UserModel.js";
const router = express.Router();

// create user router

router.post("/", async (req, res, next) => {
  try {
    //get the incoming data
    //call inssertuser to insert into the database

    const user = await insertUser(req.body);
    console.log(user);

    if (user?._id) {
      return res.json({
        status: "success",
        message: "User create successfully, you may login now.",
      });
    }
    res.json({
      status: "success",
      message: "Unable to create the user. Please try again",
    });
  } catch (error) {
    console.log(error.message);

    if (error.message.includes("E11000 duplicate key error collection")) {
      error.code = 200;
      error.message =
        "There is already another user exist with smae email, Please reset password to use or use different email to register";
    }
    next(error);
  }
});

export default router;
