const models = require("../models/index");

async function getOnlineUsers(io, socket) {
  var userId = socket.request.user.id;
  try {
    const friends = await models.friend.findAll({
      where: {
        userId: userId,
      },
    });
    var friendsOnline = [];
    friends.forEach((element) => {
      if (
        element.friendUserId in onlineUsers &&
        !friendsOnline.includes(element.friendUserId)
      ) {
        friendsOnline.push(element.friendUserId);
      }
    });
    io.to(socket.id).emit("onlineUsers", friendsOnline);
  } catch (err) {
    console.log(err);
  }
}

module.exports = getOnlineUsers;
