const express = require("express");
const {
  create,
  patch,
  getAll,
  getById,
  deleteHero,
} = require("../controllers/superHeroControllers");

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", create);
router.patch("/:patchField", patch);
router.delete("/:id", deleteHero);

module.exports = router;
