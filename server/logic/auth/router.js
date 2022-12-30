/***************
 * Router File *
 ***************/

const router = require("express").Router();
//const facebook = require("./facebook/router.js");
const auth = require("./auth/router.js");

//router.use("/facebook", facebook);
router.use("/" , auth);

module.exports = router;