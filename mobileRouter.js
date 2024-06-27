const express = require('express');
const router = express.Router();
const authenticate = require("../middleware/authmiddleware")
const mobile = require("../Controllers/mobilecontroller")

router.post("/create",authenticate.protect,mobile.createMobile)
router.put("/update/:id",authenticate.protect,mobile.updateMobile)

// router.post("/login",user.Login)

module.exports = router
