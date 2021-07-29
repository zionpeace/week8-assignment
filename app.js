
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const db = require("./config/db");
const userRoutes = require("./routes/routes");
const cors = require("cors");
const port = 8080;

dotenv.config({ path: "./config.env" });

db()

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/v1", userRoutes);

app.use((error, req, res, next) => {
  res.status(500).json({ error: error.message });
});

app.listen(port, () => {
  console.log("Listening to Port ", port);
});

module.exports = app;