const { Hero } = require("../../models");

const createHero = async (req, res, next) => {
  try {
    const {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      Images,
    } = req.body;
    const findResult = await Hero.findOne({ nickname });
    if (findResult) {
      const error = new Error();
      error.status = 400;
      error.message = "Hero already exist";
      next(error);
      return;
    }
    const result = await Hero.create({
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      Images,
    });
    if (!result) {
      throw new Error();
    }
    res.status(201).json({
      message: "New superhero created",
    });
  } catch (err) {
    err.status = 400;
    err.message = "Hero creation error";
    next(err);
  }
};

module.exports = createHero;
