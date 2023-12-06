const express = require('express');
const router = express.Router();
const validToken = require("../middleware/validTokenHandler")
const { postLogin, currentLogin, registerUser, logout } = require("../controllers/loginController");


router.get("/current", currentLogin);
// router.get("/current",validToken, currentLogin);

router.post("/register", registerUser);

router.post("/login", postLogin);

router.get("/logout", logout);


module.exports = router;