/**
 * CLI tool
 */

const generateNewView = require("./cmd/view.js");
const generateNewComponent = require("./cmd/component.js");

const {CLI: clientDir} = require("../config.js");
const args = process.argv.slice(2);
const cmd = args[0];

// create command
if (cmd === "create") {
    
    // node main.js create view [name]
    if (args[1] === "view") {
        let viewName = args[2];
        generateNewView(viewName, clientDir);
        console.log(viewName + "-view ready!");
    }
    
    // node main.js create component [name]
    else if (args[1] === "component") {
        let componentName = args[2];
        generateNewComponent(componentName, clientDir);
        console.log(componentName + " component ready!");
    }
}