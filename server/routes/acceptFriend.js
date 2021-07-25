var express = require("express");
var router = express.Router();
const models = require("../models/index");
const auth = require("../middleware/auth");
const { Op } = require("sequelize");

/* GET users listing. */
router.get("/", auth, (req, res, next) => {
    async function acceptFriend() {
        return console.log(req.query.id)
        try {
            // mark friend request status as accept
            const acceptFriend = await models.friend.findByPk(req.query.id);
            await acceptFriend.update({ status: 1 });

            //create new friend table showing that the user accepting the friend request has accepted to be friends with other person.
            //this is important because friendship goes two ways.

            //we have to first of all check if the row already exists

            const checkRow = await models.friend.findOne({
                where: {
                    [Op.and]: {
                        userId: req.user.id,
                        friendUserId: acceptFriend.id
                    }
                },
            });

            //   if it does just update it's friendship status
            if (checkRow) {
                await checkRow.update({ status: 1 });
                return res.json({ acceptStatus: 1 });
            }

            //if it does not exist create a new one for it
            const newFriend = models.friend.build({
                userId: acceptFriend.friendUserId,
                nameOfUser: req.user.name,
                friendUserId: acceptFriend.userId,
                friendName: acceptFriend.nameOfUser,
                status: 1,
                messageId: acceptFriend.messageId,
            });
            await newFriend.save();
            return res.json({ acceptStatus: 1 });
        } catch (err) {
            console.log(err);
        }
    }
    acceptFriend();
});

module.exports = router;