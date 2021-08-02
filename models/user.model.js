//class updates
const mongoose = require("mongoose")
const {Schema} = mongoose

const userSchema = new Schema({
   name: String,
   description: String,
   category: String,
   price: String,
   number_in_stock: String,
   url: String,
   published: Boolean
 },
 { timestamps: true }
     
  );

  const User = mongoose.model("User", userSchema);

  module.exports = User;

