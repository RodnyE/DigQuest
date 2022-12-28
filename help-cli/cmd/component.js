/**********************
* Component Generator *
***********************/

const {
    readFileSync,
    writeFileSync,
    mkdirSync
} = require("fs");

const path = require("path");
const parseTemplate = require("../template-parser.js");


module.exports = (compName, clientDir) => {
    let compUpName = compName.charAt(0).toUpperCase() + compName.slice(1);
    let templateScope = {
        NAME: compName,
        UPNAME: compUpName
    };
    
    // create component folder
    let compDir = path.join(clientDir, "comp/", compName);
    mkdirSync(compDir);

    // create styles
    let cssFile = readFileSync("./comp-template/comp.css", "utf8");
    cssFile = parseTemplate(cssFile, templateScope);
    writeFileSync(path.join(compDir, compName + ".css"), cssFile);

    // create logic
    let jsFile = readFileSync("./comp-template/comp.js", "utf8");
    jsFile = parseTemplate(jsFile, templateScope);
    writeFileSync(path.join(compDir, compName + ".js"), jsFile);
}