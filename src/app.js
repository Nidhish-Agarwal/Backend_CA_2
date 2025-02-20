const express = require("express");
const app = express();

const userRouter = require("./routes/user.route.js");

app.use(express.json());

app.use("/", userRouter);

app.listen(8080, () => {
  console.log("App is running on port 8080");
});
