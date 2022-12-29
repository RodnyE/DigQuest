/******************
 * Testing server *
 ******************/
 
 const { TEST_PORT, CLI } = require("../config.js");
 const express = require("express");
 const app = express();
 
 app.listen(TEST_PORT, () => console.log("Server Running on port: " + TEST_PORT));
 app.use("/", express.static(CLI));