/**
 * Menu View
 */
let menuView;


function initMenuView () {
    
    menuView = new ViewComponent("#menu-view");
    menuView.element.innerText = "Menu";
    
    initMenuView = null;
    console.log("menu-view ready!");
}