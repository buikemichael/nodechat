const express = require("express");
const models = require("../models/index");
const LocalStrategy = require("passport-local").Strategy;

function initializePassport(passport) {
  passport.use(
    "local-login",
    new LocalStrategy({ usernameField: "email" }, async function (
      email,
      password,
      done
    ) {
      try {
        const user = await models.user.findOne({ where: { email: email } });
        if (user == null) {
          return done(null, false, { message: "User not found" });
        }
        if (user.password !== password) {
          return done(null, false, { message: "Incorrect Password" });
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    })
  );

  passport.use(
    "local-register",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      async function (req, email, password, done) {
        try {
          const user = await models.user.findOne({ where: { email: email } });
          if (user) {
            return done(null, false, { message: "User Already Exist" });
          }
          const newUser = models.user.build({
            name: req.body.name,
            email: email,
            password: password,
          });
          await newUser.save();
          return done(null, newUser);
        } catch (err) {
          console.log(err.message);
          return done(err);
        }
      }
    )
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    async function findUser() {
      try {
        const user = await models.user.findByPk(id);
        done(null, user);
      } catch (err) {
        console.log(err);
      }
    }
    findUser();
  });
}

module.exports = initializePassport;
