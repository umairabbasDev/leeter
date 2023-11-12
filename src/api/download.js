const express = require("express");
const { download_video } = require("../controller/instagram");

const router = express.Router();

router.get("/", download_video);

module.exports = router;
