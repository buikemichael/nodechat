const models = require("../models/index");

async function getFriends(args) {
    try {
        const friends = await models.friend.findAll({ raw: true });
        console.log(friends)
        return friends
    } catch (err) {
        console.log(err);
    }
}

module.exports = getFriends;