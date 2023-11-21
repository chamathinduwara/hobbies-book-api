const asyncHandler = require("express-async-handler");
const userData = require("../data/userData").default;
const userService = require("../services/userService");
//@desc Get Users
//@route GET /api/v1/users
//@access Public
const getUser = asyncHandler(async (req, res) => {
    const allUsers = await userService.getAllUsersService();
    res.status(200).json(allUsers);
});

//@desc Create User
//@route POST /api/v1/Hobbys
//@access Public
const createUser = asyncHandler(async (req, res) => {
    const { name, email, contact } = req.body;
    if (!name || !email || !contact) {
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

//@desc Update User
//@route PUT /api/v1/User/:id
//@access Public
const updateUser = asyncHandler(async (req, res) => {
    res.status(200).json({ success: true, msg: "Update User" });
})

//@desc Delete User
//@route DELETE /api/v1/User/:id
//@access Public
const deleteUser = asyncHandler(async (req, res) => {
    res.status(200).json({ success: true, msg: "Delete all User" });
})


module.exports = { getUser, createUser, updateUser, deleteUser }

