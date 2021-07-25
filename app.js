const express = require('express');
const cors = require('cors');
const userRoutes = require("./routes/routes");
const dotenv = require("dotenv");
const db = require("./config/db")

// configure dotenv for environment variable
dotenv.config({ path: "./config.env" });
const app = express();

db()
app.use(cors)
app.use(express.json());
app.use("/api/v1/user", userRoutes);
app.use((err,req,res, next) => {
    res.status(500).json({ err: err.message });
})
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
module.exports = app;