const express = require('express');
const router = express.Router();
const validToken = require("../middleware/validTokenHandler")
const { postLogin, currentLogin, registerUser } = require("../controllers/loginController");


router.get("/",validToken, currentLogin);

router.post("/", registerUser);

router.route("/").post(postLogin);


module.exports = router;