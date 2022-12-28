/***************
 * Router File *
 ***************/

const router = require("express").Router();
const passport = require("./passport.js");

router.post('/login', passport.authenticate('login', {
    successRedirect: '/game',
    failureRedirect: '/login',
    failureFlash: true
}));

router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/game',
    failureRedirect: '/signup',
    failureFlash: true
}));


module.exports = router;