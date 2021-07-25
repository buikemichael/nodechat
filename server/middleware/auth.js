function auth(req, res, next) {
  if (req.isAuthenticated()) {
    // req.user is available for use here
    return next();
  }

  // denied. redirect to login
  console.log("unauthorized");
  //   res.redirect("/");
}

module.exports = auth;
