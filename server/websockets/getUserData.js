async function getUserData(io, socket, data) {
    var user = socket.request.user.toJSON()
    io.to(socket.id).emit("userData", { user });
}

module.exports = getUserData;