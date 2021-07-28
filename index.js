const express = require("express");
const dotenv = require("dotenv");
const db = require("./config/db")





db()
const app = express();

app.use(express.json());


const userRoute = require("./route/userRoute")

app.use("/api/users", userRoute)

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.send("Welcome to our inventory app!" );
});









const PORT = 9000;

app.listen(PORT, () =>
console.log(`Server started on port http://127.0.0.1:${PORT}`)
);
// app.listen(port, () => {
//   console.log(`Server running on ${port}`);
// });

// app.listen(6000, () => console.log('Example app is listening on port 6000.'));