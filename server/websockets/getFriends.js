const models = require("../models/index");

async function getFriends(io, socket, data) {
    try {
        const friends = await models.user.findOne({
            where: {
                id: socket.request.user.id,
            },
            include: [{
                model: models.friend,
                include: [{
                        model: models.user,
                        as: "friendInfo",
                    },
                    {
                        model: models.message,
                    },
                ],
            }, ],
        });
        io.to(socket.id).emit("getFriends", { info: friends.toJSON() });
    } catch (err) {
        console.log(err);
    }
}

module.exports = getFriends;