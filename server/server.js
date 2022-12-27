/********************
 * Server Main File *
 ********************/

/**************
 *   Config   *
 **************/
const config = require("../config.js");
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const router = require(config.LOGIC + "/router.js");
const cors = require("cors");

app.use(cors());
app.use(express.static('../client/')); //statics files
app.use("/", router);

//Error route
app.use((req , res) => { 
    res.json({
    status: false, message: "ERROR 404"});
});

server.listen(config.PORT , (log) => console.log("Server running on port:" + config.PORT));

module.exports = io;

// Call to socket module.
require(config.LOGIC + "/socket.js");