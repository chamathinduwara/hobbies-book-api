const express = require('express');
const router = express.Router();
const { getHobby, createHobby, updateHobby, deleteHobby } = require("../controllers/hobbyController");

router.route("/").get(getHobby);

router.route("/").post(createHobby);

router.route("/:id").put(updateHobby);

router.route("/:id").delete(deleteHobby);

module.exports = router;