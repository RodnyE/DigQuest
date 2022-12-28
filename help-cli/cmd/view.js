/******************
* View Generator *
******************/

const {
    readFileSync,
    writeFileSync,
    mkdirSync
} = require("fs");

const path = require("path");
const parseTemplate = require("../template-parser.js");


module.exports = (NAME, clientDir) => {
    let UPNAME = NAME.charAt(0).toUpperCase() + NAME.slice(1);

    // create view folder
    let viewDir = path.join(clientDir, "views/", NAME + "-view/");
    mkdirSync(viewDir);

    // create styles
    let cssFile = readFileSync("./view-template/view.css", "utf8");
    cssFile = parseTemplate(cssFile, {
        NAME,
        UPNAME,
    });
    writeFileSync(path.join(viewDir, "view.css"), cssFile);

    // create logic
    let jsFile = readFileSync("./view-template/view.js", "utf8");
    jsFile = parseTemplate(jsFile, {
        NAME,
        UPNAME
    });
    writeFileSync(path.join(viewDir, "view.js"), jsFile);
}