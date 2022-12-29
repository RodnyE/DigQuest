/**
 * {{UPNAME}} View
 */
let {{NAME}}View;


function init{{UPNAME}}View () {
    
    {{NAME}}View = new ViewComponent("#{{NAME}}-view");
    {{NAME}}View.element.innerText = "{{UPNAME}}";
    
    init{{UPNAME}}View = null;
    console.log("{{NAME}}-view ready!");
}