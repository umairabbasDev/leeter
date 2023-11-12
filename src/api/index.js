const express = require("express");

const emojis = require("./emojis");
const download = require("./download");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - it is a basic api the first ever created api ",
  });
});

router.use("/emojis", emojis);
router.use("/download", download);

module.exports = router;
