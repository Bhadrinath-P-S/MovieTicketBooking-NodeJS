const express = require("express");
const userCoontroller = require("../controllers/users");
const router = express.Router();

router.post("/Register",userCoontroller.register);
router.post("/Login",userCoontroller.login);
router.post("/Theatre",userCoontroller.theatre);
module.exports = router;