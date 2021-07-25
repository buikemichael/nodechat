const models = require("../models/index");

async function saveSocketId(io, socket, data) {
    var newSocket = { userId: socket.request.user.id, socketId: socket.id }
    var result = onlineUsers.filter(el => el.userId === socket.request.user.id)

    if (result.length > 0) {
        result[0].socketId = socket.id;
    } else {
        onlineUsers.push(newSocket)
    }

    try {
        const friends = await models.friend.findAll({
            where: {
                userId: socket.request.user.id,
            },
        });

        var socket_ids = friends.map((res) => {
            var ttt = onlineUsers.find(item => item.userId === res.friendUserId)
            if (ttt === undefined) {
                return ""
            }
            return ttt.socketId
        });
        socket_ids.forEach((element) => {
            io.to(element).emit("online", { id: socket.request.user.id });
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = saveSocketId;