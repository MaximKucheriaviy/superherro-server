const { Hero } = require("../../models");

const patchHero = async (req, res, next) => {
  try {
    const { id, value } = req.body;
    const { patchField } = req.params;
    const hero = await Hero.findById(id);
    if (!hero) {
      throw new Error();
    }
    switch (patchField) {
      case "nickname":
        const valueNameResult = await Hero.findOne({ nickname: value });
        if (valueNameResult) {
          const error = new Error();
          error.status = 400;
          error.message = `Hero with nickname ${value} already exist`;
          next(error);
          return;
        }
        const updateResult = await Hero.findByIdAndUpdate(id, {
          nickname: value,
        });
        if (!updateResult) {
          throw new Error();
        }
    }
    res.status(201).json({
      message: "Hero updated",
    });
  } catch (err) {
    err.status = 400;
    err.message = "Update faild";
    next(err);
  }
};

module.exports = patchHero;
