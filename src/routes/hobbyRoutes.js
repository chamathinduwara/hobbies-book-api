const express = require('express');
const router = express.Router();
const { getHobbies, getHobby, createHobby, updateHobby, deleteHobby } = require("../controllers/hobbyController");

router.route("/").get(getHobbies);

router.route("/:id").get(getHobby);

router.route("/").post(createHobby);

router.route("/:id").put(updateHobby);

router.route("/:id").delete(deleteHobby);

module.exports = router;