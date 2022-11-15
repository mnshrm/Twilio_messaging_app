const express = require("express");
const {
  textMessage,
  mediaMessage,
  recieveMessage,
  recieveUpdates,
} = require("../Controllers/messageController");

const router = express.Router();

router.route("/send/text").post(textMessage);
router.route("/send/media").post(mediaMessage);

router.route("/recieve").post(recieveMessage);
router.route("/receive/updates").post(recieveUpdates);

module.exports = router;
