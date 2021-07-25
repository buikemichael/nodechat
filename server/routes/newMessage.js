var express = require("express");
var router = express.Router();
const models = require("../models/index");
const auth = require("../middleware/auth");

/* GET users listing. */
router.post("/", auth, (req, res, next) => {
  async function createMessage() {
    try {
      const newMessage = models.message.build({
        messageId: req.body.messageId,
        senderId: req.body.senderId,
        recieverId: req.body.recieverId,
        message: req.body.newMessage,
      });
      await newMessage.save();
      return res.json({ messageStatus: 1, newMessage: newMessage });
    } catch (err) {
      console.log(err);
    }
  }
  createMessage();
});

module.exports = router;
