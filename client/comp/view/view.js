/*
 * View Component
 */
let viewVisible = null;


/**
 * Create a new view
 * @param selector String - css selector of element
 */
class ViewComponent {
    
    constructor (selector) {
        const el = document.querySelector(selector);
        el.classList.add("view");

        this.element = el;
        this.classList = el.classList;
        if (!viewVisible) this.show();
    }


    /** 
     * show view and hide actual visible view
     */
    show () {
        if (this.visible) return;
        this.visible = true;
        this.classList.add("view-visible");

        if (viewVisible) viewVisible.hide();
        viewVisible = this;
    }

    /** 
     * hide view
     */
    hide () {
        if (!this.visible) return;
        this.visible = false;
        this.classList.remove("view-visible");
    }
}