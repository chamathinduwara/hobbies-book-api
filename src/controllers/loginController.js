const asyncHandler = require("express-async-handler");
const loginService = require("../services/loginService");
const userService = require("../services/userService");
const jwt = require("jsonwebtoken");

//@desc Get Login
//@route GET /api/v1/login
//@access Public
const postLogin = asyncHandler(async (req, res) => {
    const { email, name } = req.body;
    if (!email || !name) {
        res.status(400).json({ success: false, msg: "Please provide email, password" });
        return;
    }
    const loginRes = await loginService.getUserIdentityService(req.body);
    if (loginRes === "User not found") {
        res.status(400).json({ success: false, msg: "User not found" });
        return;
    }else if (loginRes === "Wrong user name not found") {
        res.status(400).json({ success: false, msg: "Wrong user name not found" });
        return;
    } else {
        const accessToken = jwt.sign(
            { email: loginRes[0].email, name: loginRes[0].name },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1d" }
        );
        res.status(200).json({ success: true, accessToken });
    }
})

//@desc Get Register
//@route GET /api/v1/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, contact, hobbies } = req.body;
    if (!name || !email || !contact || !hobbies) {
        res.status(400).json({ success: false, msg: "Please provide name, email, hobbies" });
        return;
    }
    const userRes =await userService.createUserService(req.body);
    if (userRes === "Email already exist"){
        res.status(400).json({ success: false, msg: "Email already exist" });
        return;
    }
    res.status(201).json(userRes);
})


const currentLogin = asyncHandler(async (req, res) => {
    res.status(200).json( req.user);
});

module.exports = { postLogin, currentLogin, registerUser }