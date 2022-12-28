/********************
 * Config Main File *
 ********************/
module.exports = {
    PORT: process.env.PORT || 3000,
    DIR: __dirname,
    CLI: __dirname + "/client",
    LOGIC: __dirname + "/server/logic",
    DB: __dirname + "/database",
    SESSION: {
        secret: "lmaoarandompasswordhere"
    },
    fb: {
        clientID: "1550585342109476",
        clientSecret: "ce58c48ca6938d0e6f6509869b53eb2e",
        callback: "/callback"
    }
};