var express = require("express");
var router = express.Router();
const models = require("../models/index");
const auth = require("../middleware/auth");

/* GET users listing. */
router.get("/", auth, (req, res, next) => {
  async function getChats() {
    try {
      const chats = await models.friend.findByPk(req.query.userId, {
        include: [
          {
            model: models.user,
            as: 'friendInfo'
          },
          {
            model: models.message,
          },
        ],
      });
      return res.json({ info: chats.toJSON() });
    } catch (err) {
      console.log(err);
    }
  }
  getChats();
});

module.exports = router;
