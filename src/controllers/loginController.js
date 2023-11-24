const asyncHandler = require("express-async-handler");
const loginService = require("../services/loginService");
const userService = require("../services/userService");
const jwt = require("jsonwebtoken");


//@desc Get Login
//@route GET /api/v1/login
//@access Public
const postLogin = asyncHandler(async (req, res) => {
    const { email, name } = req.body;
    console.log(req.body);
    if (!email || !name) {
        res.status(400).json({ success: false, msg: "Please provide email, name" });
        return;
    }
    const loginRes = await loginService.getUserIdentityService(req.body);
    if (loginRes === "User not found") {
        res.status(400).json({ success: false, msg: "User not found" });
        return;
    } else if (loginRes === "Wrong user name not found") {
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

// @desc Get Register
// @route GET /api/v1/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, hobbies, home, personal } = req.body;
    console.log(req.body);
    if (!name || !email) {
        res.status(400).json({ success: false, msg: "Please provide name, email, hobbies" });
        return;
    }
    const data = {
        name: name,
        email: email,
        hobbies: hobbies,
        contact: [
            {
                number: home,
                type: "home"
            },
            {
                number: personal,
                type: "personal"
            }
        ]
    }
    const userRes = await userService.createUserService(data);
    if (userRes === "Email already exist") {
        res.status(400).json({ success: false, msg: "Email already exist" });
        return;
    }
    res.status(201).json(userRes);
})


const currentLogin = asyncHandler(async (req, res) => {
    console.log(req.user);
    const currentUser = await userService.getUserByEmailService(req.user.email);
    const currentUserDetails = await userService.getUserByIdService(currentUser[0].user_id);
    res.status(200).json(currentUserDetails);
});

const logout = asyncHandler(async (req, res) => {
    console.log(req.user)
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ success: false, msg: "Failed to logout" });

        }
    });
    res.cookie("jwt", "", { maxAge: 1 });
    res.status(200).json({ success: true });
});

module.exports = { postLogin, currentLogin, registerUser, logout }