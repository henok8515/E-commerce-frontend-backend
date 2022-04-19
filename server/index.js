const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./router/auth");
dotenv.config();
// app must be declared on the top
app = express();
app.use(express.json());
app.use("/user/api", userRoute);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("db connectd");
  })
  .catch((err) => {
    console.log(err, "error");
  });
const port = process.env.PORT;
app.listen(port || 3001, () => {
  console.log(`server running on port ${port}`);
});
