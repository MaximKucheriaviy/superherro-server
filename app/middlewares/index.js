const morgan = require("./morganSetup");
const defaultError = require("./defaultError");
const validator = require("./validator");
const errorCatcher = require("./errorCatcher");
const uploader = require("./uploader");

module.exports = {
  morgan,
  defaultError,
  validator,
  errorCatcher,
  uploader,
};
