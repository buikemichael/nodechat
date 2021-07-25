var express = require("express");
var router = express.Router();
const models = require("../models/index");
const auth = require("../middleware/auth");
const { Op } = require("sequelize");

/* GET users listing. */
router.get("/", auth, (req, res, next) => {
  async function getFriendRequests() {
    try {
      const friendRequests = await models.friend.findAll({
        where: {
          [Op.and]: [
            {
              friendUserId: req.user.id,
            },
            { status: 0 },
          ],
        },
        include: {
          model: models.user,
          as: "inviter",
        },
      });
      if (friendRequests === null) {
        return res.json({ info: null });
      }
      return res.json({ info: friendRequests });
    } catch (err) {
      console.log(err);
    }
  }
  getFriendRequests();
});

module.exports = router;
