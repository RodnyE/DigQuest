/**
 * Auth View
 */
let authView;


function initAuthView () {
    
    authView = new ViewComponent("#auth-view");
    authView.element.innerText = "Auth";
    
    initAuthView = null;
    console.log("auth-view ready!");
}