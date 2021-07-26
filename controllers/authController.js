const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../models/users");


exports.signup = async (req, res, next) => {
    try {
      let { firstName, lastName, email, password } = req.body;
  
      const checkEmail = await User.findOne({email})
  console.log(checkEmail)
      if (checkEmail) {
        return res.json({
          status: "failed",
          message: "Email already exist"
        })
      }
      // hash incoming password from req.body
      password = await bcrypt.hash(password, process.env.BCRYPT_SALT);
  
      const newUser = { firstName, lastName, email, password };
  
      const createUser = await User.create(newUser)
  
  const id = createUser._id
      // sign jwt token with user id as payload
      const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: `${process.env.JWT_EXPIRES_IN}`,
      });
  
      // push new user to dummy database
  
      res.status(201).json({
        status: "success",
        token,
        data: {
          id: createUser._id,
          firstName: createUser.firstName,
          lastName: createUser.lastName,
          email: createUser.email
        },
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        error: err,
      });
      console.log(err);
    }
  
    next();
  };
  
  exports.login = () => {
  }
  
  exports.getAllUser = async (req, res, next) => {
    try {
      console.log(req.user) 
      const users = await User.find({})
  
      res.status(200).json({
        status: "success",
        data: users, 
      });
    } catch (err) {
      console.log(err)
    }
    next();
  };

  const {
    requestPasswordReset,
    resetPassword,
  } = require("../service/authService");
  

const resetPasswordRequestController = async (req, res, next) => {
    const requestPasswordResetService = await requestPasswordReset(
      req.body.email
    );
    return res.json(requestPasswordResetService);
  };

const resetPasswordController = async (req, res, next) => {
    const resetPasswordService = await resetPassword(
      req.body.userId,
      req.body.token,
      req.body.password
    );
    return res.json(resetPasswordService);
  };

  module.exports = {
    resetPasswordRequestController,
    resetPasswordController,
  };