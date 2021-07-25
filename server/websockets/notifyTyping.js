const models = require("../models/index");

async function notifyTyping(io, socket, data) {
  const socketId = onlineUsers[data.recieverId.toString()];
  io.to(socketId).emit("typing", { id: socket.request.user.id });
}

module.exports = notifyTyping;
