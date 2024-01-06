import express from "express";
const router = express.Router();

import {
  authUser,
  registerUser,
  logout,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logout);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;
