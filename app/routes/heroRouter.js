const express = require("express");
const {
  create,
  patch,
  getAll,
  getById,
  deleteHero,
} = require("../controllers/superHeroControllers");
const { uploader } = require("../middlewares");

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", create);
router.patch("/:patchField", patch);
router.delete("/:id", deleteHero);
router.post("/img", uploader.single("image"), (req, res) => {
  console.log(req.uploadedFile);
  res.status(200).json();
});

module.exports = router;
