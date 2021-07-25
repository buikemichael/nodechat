const models = require("../models/index");

function socketMiddleware(socket, passport, store, next) {
  store.get(socket.handshake.query.session_id, (err, session) => {
    if (err) {
      console.log(err);
    }
    if (!session) {
      console.log("session not found");
      //disconnect socket if no user is logged in.
     return socket.disconnect();
    }
    if (session) {
      var id = session.passport.user;
    }
    passport.deserializeUser(id, (err, user) => {
      if (err) {
        console.log(err);
      }
      socket.request.user = user;
      next();
    });
  });
}
module.exports = socketMiddleware;
