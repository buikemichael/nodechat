var express = require("express");
var router = express.Router();
const { Op } = require("sequelize");
const models = require("../models/index");
const auth = require("../middleware/auth");
const { v4: uuidv4 } = require("uuid");

/* GET users listing. */
router.post("/", auth, (req, res, next) => {
  async function inviteFriend() {
    const lookUpEmail = await models.user.findOne({
      where: { email: req.body.email },
    });
    if (lookUpEmail === null) {
      return res.json({ inviteStatus: 2 }); //user does not exist
    }
    const checkFriendStatus = await models.friend.findOne({
      where: {
        [Op.and]: { friendUserId: lookUpEmail.id, userId: req.user.id },
      },
    });
    if (checkFriendStatus !== null) {
      if (checkFriendStatus.status == 0) {
        return res.json({ inviteStatus: 3 }); //invitaion already sent
      }
      if (checkFriendStatus.status == 1) {
        return res.json({ inviteStatus: 4 }); //Already friends
      }
    }
    console.log(req.user.name)
    try {
      const newFriend = models.friend.build({
        userId: req.user.id,
        nameOfUser: req.user.name,
        friendUserId: lookUpEmail.id,
        friendName: lookUpEmail.name,
        status: 0,
        messageId: uuidv4(),
      });
      await newFriend.save();
      return res.json({ inviteStatus: 1 }); //invitation successful
    } catch (err) {
      console.log(err);
    }
  }
  inviteFriend();
});

module.exports = router;
