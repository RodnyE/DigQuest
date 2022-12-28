/***************
 * Router File *
 ***************/

const router = require("express").Router();
const fblogin = require("./fb-login.js");

router.get("/", fblogin.authenticate("facebook"));
router.get("/callback" , fblogin.authenticate("facebook" , { successRedirect: '/user', failureRedirect: '/' }))

module.exports = router;