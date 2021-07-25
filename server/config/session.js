require("dotenv").config();
module.exports = expressOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  key: "connect.sid", // the name of the cookie where express/connect stores its session_id
  saveUninitialized: false,
  cookie: { secure: false, httpOnly: false, maxAge: 3600000 },
};
