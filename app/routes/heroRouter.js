const express = require("express");
const { create, patch } = require("../controllers/superHeroControllers");

const router = express.Router();

router.post("/create", create);
router.patch("/:patchField", patch);

module.exports = router;
