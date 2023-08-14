const express = require("express");
const fileUpload = require("express-fileupload");

const router = express.Router();
const { addImage } = require("../controllers/ImageUploaderController");
router.post(
  "/",
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  }),
  addImage
);
module.exports = router;
