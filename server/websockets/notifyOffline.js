const models = require("../models/index");

async function notifyOffline(io, socket, data) {
    delete onlineUsers[socket.request.user.id];
    // console.log(onlineUsers);
    try {
        const friends = await models.friend.findAll({
            where: {
                userId: socket.request.user.id,
            },
        });
        var socket_ids = friends.map((res) => {
            if (res.friendUserId in onlineUsers) {
                return onlineUsers[res.friendUserId];
            }
        });
        socket_ids.forEach((element) => {
            io.to(element).emit("offline", { id: socket.request.user.id });
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = notifyOffline;