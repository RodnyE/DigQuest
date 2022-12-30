/***************
 * Router File *
 ***************/

const router = require("express").Router();
const login = require("./login.js");
const signup = require("./signup.js");

/*
const passport = require("./passport.js");

router.post('/login', passport.authenticate('login', {
    successRedirect: '/game',
    failureRedirect: '/auth/login',
    failureFlash: true
}));

router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/game',
    failureRedirect: '/auth/signup',
    failureFlash: true
}));*/

router.post("/login" , login);
router.post("/signup" , signup);


module.exports = router;