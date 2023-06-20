const cloudinary = require("cloudinary").v2;
const { log } = require("console");
const path = require("path");

cloudinary.config({
  cloud_name: "dfjnw7uur",
  api_key: "454661318526217",
  api_secret: "nteaWWoMLN3pEKHafAzSUcjq2TM",
});

const upload = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(
      path.resolve(__dirname, "1687270977155plat1.png")
    );
    return result;
  } catch (err) {
    console.log("Errororrr");
    console.log(err);
  }
};

const deleteResource = async (id) => {
  try {
    const res = await cloudinary.api.delete_resources("s6riyz6pwg8xkkmyaasa");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

deleteResource();
