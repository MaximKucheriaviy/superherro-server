const express = require("express");
const fs = require("fs/promises");
const {
  create,
  patch,
  getAll,
  getById,
  deleteHero,
  addImages,
} = require("../controllers/superHeroControllers");
const { uploader } = require("../middlewares");

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", uploader.array("Image"), create);
router.patch("/info/:patchField", patch);
router.patch("/image", uploader.array("Image"), addImages);
router.delete("/:id", deleteHero);

module.exports = router;
