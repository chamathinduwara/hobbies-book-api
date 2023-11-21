const express = require('express');
const router = express.Router();
const { getUser, createUser, updateUser, deleteUser } = require("../controllers/userController");

router.route("/").get(getUser);

router.route("/").post(createUser);

router.route("/:id").put(updateUser);

router.route("/:id").delete(deleteUser);

module.exports = router;