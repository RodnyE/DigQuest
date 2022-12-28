/**
 * {{UPNAME}} View
 */
let {{NAME}}View;


function init{{UPNAME}}View () {
    
    {{NAME}}View = new ViewComponent("#{{NAME}}-view");
    authView.element.innerText = "{{UPNAME}}";
    
    init{{UPNAME}}View = null;
    console.log("{{NAME}}-view ready!");
}