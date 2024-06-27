const express = require('express');
const router = express.Router();

const user = require("../Controllers/usercontroller")

router.post("/register",user.Signup)
router.post("/login",user.Login)

module.exports = router
