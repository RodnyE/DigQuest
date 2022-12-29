/**
 * main script
 */
 
function main () {
    
    // start browser console
    eruda.init(); 
    
    // start views
    initAuthView();
    initMenuView();
    initGameView();
    
    console.log("ready!");
}