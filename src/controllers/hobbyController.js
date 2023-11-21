const asyncHandler = require("express-async-handler");
const userData = require("../data/userData").default;
const userServices = require("../services/userService");
//@desc Get Hobby
//@route GET /api/v1/Hobbys/:id
//@access Public
const getHobby = asyncHandler(async (req, res) => {
    res.status(200).json({ success: true, msg: "Show all hobbies" });
});

//@desc Create Hobby
//@route POST /api/v1/Hobbys
//@access Public
const createHobby = asyncHandler(async (req, res) => {
    const { name, email, hobbies } = req.body;
    if (!name || !email || !hobbies) {
        res.status(400).json({ success: false, msg: "Please provide name, email, hobbies" });
        return;
    }

    res.status(201).json({ success: true, msg: `Create all hobbies :- ${req.body}` });
})

//@desc Update Hobby
//@route PUT /api/v1/Hobbys/:id
//@access Public
const updateHobby = asyncHandler(async (req, res) => {
    res.status(200).json({ success: true, msg: "Update all hobbies" });
})

//@desc Delete Hobby
//@route DELETE /api/v1/Hobbys/:id
//@access Public
const deleteHobby = asyncHandler(async (req, res) => {
    res.status(200).json({ success: true, msg: "Delete all hobbies" });
})


module.exports = { getHobby, createHobby, updateHobby, deleteHobby }

