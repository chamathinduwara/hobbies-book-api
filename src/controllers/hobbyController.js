const asyncHandler = require("express-async-handler");
const userData = require("../data/userData").default;
const userServices = require("../services/userService");
const hobbyService = require("../services/hobbyService");
//@desc Get Hobby
//@route GET /api/v1/Hobbys/:id
//@access Public
const getHobbies = asyncHandler(async (req, res) => {
    const allHobbies = await hobbyService.getAllHobbiesService();
    res.status(200).json(allHobbies);
});

//@desc Get Hobby
//@route GET /api/v1/Hobbys/:id
//@access Public
const getHobby = asyncHandler(async (req, res) => {
    const allHobbies = await hobbyService.getHobbyByIdService(req.params.id);
    res.status(200).json(allHobbies);
});
//@desc Create Hobby
//@route POST /api/v1/Hobbys
//@access Public
const createHobby = asyncHandler(async (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(400).json({ success: false, msg: "Please provide name, email, hobbies" });
        return;
    }
    const hobbyres = await hobbyService.createHobbyService(req.body);
    if (hobbyres === "Hobby already exist") {
        res.status(400).json({ success: false, msg: "Hobby already exist" });
        return;
    }
    res.status(201).json(hobbyres);
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


module.exports = { getHobbies, getHobby, createHobby, updateHobby, deleteHobby }

