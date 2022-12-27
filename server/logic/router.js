/***************
 * Router File *
 ***************/

const config = require("../../config.js");
const router = require("express").Router();
const index = async (req , res) => {
    res.sendFile(config.CLI + "/index.html");
};

router.use("/", index);

module.exports = router;