
const express = require("express");

const auth = require("../middleware/auth");
const authController = require("../controllers/authController");

const {
    resetPasswordRequestController,
    resetPasswordController,
  } = require("../controllers/authController");
  
const router = express.Router();

// POST /api/v1/users/signup

router.post("/signup", authController.signup);
router.post("/requestResetPassword", auth, resetPasswordRequestController);
router.post("/resetPassword", auth, resetPasswordRequestController);

module.exports = router;
  
  
  