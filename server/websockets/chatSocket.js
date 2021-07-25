const models = require("../models/index");

async function createMessage(io, socket, msg) {
    console.log(onlineUsers)
    const recieverSocketId = onlineUsers.find(el => {
        return el.userId == msg.recieverId
    });
    console.log(recieverSocketId.socketId)

    try {
        if (recieverSocketId) {
            const newMessage = models.message.build({
                messageId: msg.messageId,
                senderId: msg.senderId,
                recieverId: msg.recieverId,
                message: msg.message,
            });
            await newMessage.save();
            io.to(recieverSocketId.socketId).emit("newMessage", {
                messageStatus: 1,
                newMessage: newMessage,
            });
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = createMessage;