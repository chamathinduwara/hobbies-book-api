const asyncHandler = require("express-async-handler");
const userService = require("../services/userService");
//@desc Get Users
//@route GET /api/v1/users
//@access Public
const getUsers = asyncHandler(async (req, res) => {
    const allUsers = await userService.getAllUsersService();
    res.status(200).json(allUsers);
});

//@desc Get Users
//@route GET /api/v1/users
//@access Public
const getUser = asyncHandler(async (req, res) => {
    const user = await userService.getUserByIdService(req.params.id);
    res.status(200).json(user);
});

//@desc Create User
//@route POST /api/v1/Hobbys
//@access Public
const createUser = asyncHandler(async (req, res) => {
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

//@desc Update User
//@route PUT /api/v1/User/:id
//@access Public
const updateUser = asyncHandler(async (req, res) => {
    console.log(req.body);
    userService.updateUserService(req.body.user_id ,req.body);
    res.status(200).json(req.body);
})

//@desc Delete User
//@route DELETE /api/v1/User/:id
//@access Public
const deleteUser = asyncHandler(async (req, res) => {
    console.log(req.params.id);
    userService.deleteUserService(req.params.id);
    res.status(200).json({ success: true, msg: "Delete all User" });
})


module.exports = { getUsers, getUser, createUser, updateUser, deleteUser }

