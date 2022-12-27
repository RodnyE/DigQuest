/********************
 * Config Main File *
 ********************/
module.exports = {
    PORT: process.env.PORT || 3000,
    DIR: __dirname,
    CLI: __dirname + "/client",
    LOGIC: __dirname + "/server/logic",
    DB: __dirname + "/database"
};