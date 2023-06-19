const express = require("express");
const { signup, login } = require("../controllers/userControllers");
const { validator } = require("../middlewares");

const router = express.Router();

router.post("/signup", validator.singupValidation, signup);
router.post("/login", validator.loginValidator, login);

module.exports = router;
