const mongoose = require("mongoose");

const imageUploaderSchema = new mongoose.Schema(
  {
    image: {
      public_id: String,
      secure_url: String,
    },
  },
  { versionKey: false }
);
const ImageUploader = mongoose.model("ImageUploader", imageUploaderSchema);

module.exports = ImageUploader;
