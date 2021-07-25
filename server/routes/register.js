var express = require("express");
var router = express.Router();
const models = require("../models/index");
const passport = require("passport");

/* GET users listing. */
router.post("/", (req, res, next) => {
  passport.authenticate("local-register", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json(info);
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.json({ isAuth: 1 });
    });
  })(req, res, next);
});

module.exports = router;
