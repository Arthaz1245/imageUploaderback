const express = require("express");
const router = express.Router();
const ImageUploader = require("./ImageUploaderRout");

router.use("/ImageUploader", ImageUploader);
module.exports = router;
