var express = require("express");
var router = express.Router();
const models = require("../models/index");
const auth = require("../middleware/auth");
const { Op } = require("sequelize");

/* GET users listing. */
router.get("/", auth, (req, res, next) => {
  async function getFriends(user) {
    try {
      const friends = await models.user.findOne({
        where: {
          id: user.id,
        },
        include: [
          {
            model: models.friend,
            include: [
              {
                model: models.user,
                as: 'friendInfo', 
              },
              {
                model: models.message,
              },
            ],
          },
        ],
      });
      return res.json({ info: friends.toJSON() });
    } catch (err) {
      console.log(err);
    }
  }
  getFriends(req.user);
  // return res.json(1);
});

module.exports = router;
