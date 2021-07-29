
const express = require("express");

const auth = require("../middleware/auth");

const {
    signUpController,
    resetPasswordRequestController,
    resetPasswordController,
  } = require("../controllers/authController");
  
const router = express.Router();

// POST /api/v1/users/signup

router.post("/signup", signUpController);
router.post("/requestResetPassword", auth, resetPasswordRequestController);
router.post("/resetPassword", auth, resetPasswordController);

module.exports = router;
  
  
  