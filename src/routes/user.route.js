const express = require("express");
const { addNewUser } = require("../controller/user.controller.js");

const router = express.Router();

router.post("/signup", addNewUser);

module.exports = router;
