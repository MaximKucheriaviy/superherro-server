const cloudinary = require("cloudinary").v2;
const path = require("path");
const fs = require("fs/promises");

cloudinary.config({
  cloud_name: "dfjnw7uur",
  api_key: "454661318526217",
  api_secret: "nteaWWoMLN3pEKHafAzSUcjq2TM",
});

const upload = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(
      path.resolve(__dirname, filePath)
    );

    await fs.unlink(filePath);
    return result;
  } catch (err) {
    console.log(err);
  }
};

//url
//secure_url
//public_id

const deleteResource = async (id) => {
  try {
    const res = await cloudinary.api.delete_resources(id);
  } catch (err) {
    throw err;
  }
};

module.exports = { upload, deleteResource };
