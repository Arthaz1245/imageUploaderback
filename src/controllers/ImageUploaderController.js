const fs = require("fs-extra");
const ImageUploader = require("../models/ImageUploader");
const { uploadImage, deleteImage } = require("../utils/Cloudinary");

const addImage = async (req, res) => {
  try {
    const { image } = req.body;
    // const user = await User.findById(author);
    // if (user) {
    const post = new ImageUploader({
      image,
    });
    // if (!req.file) {
    //   return res.status(400).json({ error: "No image uploaded" });
    // }

    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      post.image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };

      await fs.unlink(req.files.image.tempFilePath);
    }
    const response = await post.save();

    res.json(response);
    // } else {
    //   return res.status(400).json("The author must be a register user");
    // }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const deleteImageU = async (id) => {
  try {
    const deletedImage = await ImageUploader.findByIdAndDelete(id);
    if (ImageUploader.image?.public_id) {
      await deleteImage(ImageUploader.image?.public_id);
    }
    return deletedImage;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  addImage,
  deleteImageU,
};
