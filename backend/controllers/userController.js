import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc   Auth user & get token
// @route  POST /api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Auth User",
  });
});

// @desc   Register a user
// @route  POST /api/users/
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  console.log("req: ", req.body);
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc   Logout a user
// @route  POST /api/users/logout
// @access Public
const logout = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "logout User",
  });
});

// @desc   Get a user
// @route  GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "User Profile",
  });
});

// @desc   Update a user
// @route  PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "User Profile Updated",
  });
});

export { authUser, registerUser, logout, getUserProfile, updateUserProfile };
