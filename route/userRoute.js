const express = require("express")
const user = require("../controllers/user.controller");
//const user = require("../models/schema.model");
const router = express.Router();

router.get("/",  (req, res,)=>{
    res.send("Welcome to my api")
})
// classwork update addition (included async)

//router.post("/signup",(req,res) => {
// classwork update addition
//  let {firstName, lastName, email, password} = req.body;
//  const checkEmail = await User.findOne({email});
 //classwork update ended here
//     console.log(req.body)
// })

 // Create a new User
 router.post("/", user.create);
  
 // Retrieve all Users
 router.get("/", user.findAll);

 // Retrieve all published Users
 router.get("/published", user.findAllPublished);

 // Retrieve a single User with id
 router.get("/:id", user.findOne);

 // Update a User with id
 router.put("/:id", user.update);

 // Delete a User with id
 router.delete("/:id", user.delete);

 // Delete all Users
 router.delete("/", user.deleteAll);

//  app.use('/api/user', router);
// };



module.exports = router