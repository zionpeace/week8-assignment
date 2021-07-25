  
const express = require("express");
const authController = require("../controllers/authController");
const auth = require("../middleware/auth")
const authService = require("../service/authService")

const router = express.Router();

// POST /api/v1/users/signup
router.get("/", auth, authController.getAllUser);

router.post("/signup", authController.signup);
router.post("/requestResetPassword", authService.requestPasswordReset);
router.post("/resetPassword", authService.resetPassword);

module.exports = router;