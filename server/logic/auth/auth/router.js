/***************
 * Router File *
 ***************/

const router = require("express").Router();
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
}));


module.exports = router;