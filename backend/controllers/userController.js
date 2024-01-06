import asyncHandler from "express-async-handler";

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
  res.status(200).json({
    message: "Register User",
  });
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
