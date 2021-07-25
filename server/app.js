var createError = require("http-errors");
var express = require("express");
var { graphqlHTTP } = require('express-graphql')
var schema = require('./schema/schema')
var cors = require("cors");
const http = require("http");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var database = require("./database");
var indexRouter = require("./routes/index");
var registerRouter = require("./routes/register");
var contactsRouter = require("./routes/contacts");
var userRouter = require("./routes/user");
var dashboardRouter = require("./routes/dashboard");
var chatRouter = require("./routes/chat");
var newMessageRouter = require("./routes/newMessage");
var inviteFriendRouter = require("./routes/inviteFriend");
var friendRequestRouter = require("./routes/friendRequests");
var acceptFriendRouter = require("./routes/acceptFriend");
const passport = require("passport");
const initializePassport = require("./config/passport-config");
const redis = require("redis");
const expressSession = require("express-session");
const expressOptions = require("./config/session");
const socketMiddleware = require("./middleware/socketMiddleware");
require("dotenv").config();

let RedisStore = require("connect-redis")(expressSession);
let redisClient = redis.createClient();

const store = new RedisStore({
    client: redisClient,
});

//import new message function for saving new messages and emiting it
const saveSocketId = require("./websockets/saveSocketId");
const getUserData = require("./websockets/getUserData");
const createMessage = require("./websockets/chatSocket");
const notifyTyping = require("./websockets/notifyTyping");
const getFriends = require("./websockets/getFriends");
const notifyOffline = require("./websockets/notifyOffline");
const getOnlineUsers = require("./websockets/getOnlineUsers");
const inviteFriend = require("./websockets/inviteFriend");
// const acceptFriend = require("./websockets/getOnlineUsers");

var app = express();

app.use(cookieParser());

initializePassport(passport);

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET, PUT, POST",
        // allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    })
);

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

//soccket io
var server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true,
    },
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const sessionMiddleWare = expressSession({
    ...expressOptions,
    store: store,
});

//express setup
app.use(sessionMiddleWare);

/*  PASSPORT SETUP  */

app.use(passport.initialize());
app.use(passport.session());

io.use((socket, next) => {
    socketMiddleware(socket, passport, store, next);
});

//declaring a global variable for online users, this is global so that it can be accessed everywhere in this app.
// global.onlineUsers = {};
global.onlineUsers = [];

//socket io
io.on("connection", (socket) => {
    saveSocketId(io, socket);
    //   socket.on("disconnect", (data) => {
    //       notifyOffline(io,socket,data)
    //   });
    getOnlineUsers(io, socket);
    socket.on("sendSocketId", (data) => {
        saveSocketId(io, socket, data);
    });
    socket.on("getUserData", (data) => {
        getUserData(io, socket, data);
    });
    socket.on("getFriends", (data) => {
        getFriends(io, socket, data);
    });
    socket.on("newMessage", (msg) => {
        createMessage(io, socket, msg);
    });
    socket.on("inviteFriend", (data) => {
        inviteFriend(io, socket, data);
    });
    socket.on("acceptFriend", (msg) => {
        acceptFriend(io, socket, msg);
    });
    socket.on("typing", (data) => {
        notifyTyping(io, socket, data);
    });
});

//router setup
app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/register", registerRouter);
app.use("/dashboard", dashboardRouter);
app.use("/chats", chatRouter);
app.use("/contacts", chatRouter);
app.use("/newMessage", newMessageRouter);
app.use("/inviteFriend", inviteFriendRouter);
app.use("/friendRequests", friendRequestRouter);
app.use("/acceptFriend", acceptFriendRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

server.listen(8000, () => {
    console.log(`App listening at 8000`);
});

module.exports = app;