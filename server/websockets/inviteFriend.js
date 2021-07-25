const { database } = require("faker");
const { Op } = require("sequelize");
const models = require("../models/index");
const { v4: uuidv4 } = require("uuid");


async function inviteFriend(io, socket, data) {
    const lookUpEmail = await models.user.findOne({
        where: { email: data.email },
    });

    if (lookUpEmail === null) {
        return io.to(socket.id).emit("inviteResponse", { inviteStatus: 2 }); //user does not exist
    }
    const checkFriendStatus = await models.friend.findOne({
        where: {
            [Op.and]: { friendUserId: lookUpEmail.id, userId: socket.request.user.id },
        },
    });
    if (checkFriendStatus !== null) {
        if (checkFriendStatus.status == 0) {
            return io.to(socket.id).emit("inviteResponse", { inviteStatus: 3 }); //invitaion already sent
        }
        if (checkFriendStatus.status == 1) {
            return io.to(socket.id).emit("inviteResponse", { inviteStatus: 4 }); //Already friends
        }
    }
    try {
        const newFriend = models.friend.build({
            userId: socket.request.user.id,
            nameOfUser: socket.request.user.name,
            friendUserId: lookUpEmail.id,
            friendName: lookUpEmail.name,
            status: 0,
            messageId: uuidv4(),
        });
        await newFriend.save();
        return io.to(socket.id).emit("inviteResponse", { inviteStatus: 1 }); //invitation successful
    } catch (err) {
        console.log(err);
    }
}

module.exports = inviteFriend;