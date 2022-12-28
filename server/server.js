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
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        method: ["POST", "GET"]
    }
});
const router = require(config.LOGIC + "/router.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(cors());
app.use(cookieParser())
app.use(bodyParser())
app.use(session({ secret: config.SESSION.secret }))
app.use(express.static('../client/')); //statics files
app.use("/", router);

//Error route
app.use((req , res) => { 
    res.json({
    status: false, message: "ERROR 404"});
});

server.listen(config.PORT , (log) => console.log("Server running on port:" + config.PORT));

module.exports = {io , app};

// Call to socket module.
require(config.LOGIC + "/socket.js");