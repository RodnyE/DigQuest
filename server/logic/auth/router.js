/***************
 * Router File *
 ***************/

const router = require("express").Router();
const facebook = require("./facebook/router.js");

router.use("/facebook", facebook);

module.exports = router;