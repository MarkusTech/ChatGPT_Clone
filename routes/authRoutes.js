import express from "express";
import {
  registerController,
  loginController,
  logoutController,
} from "../controller/authController.js";

// router object
const router = express.Router();

// routes
// REGISTER
router.post("/register", registerController);

// LOGIN
router.post("/login", loginController);

// LOGOUT
router.post("/logout", logoutController);

export default router;
