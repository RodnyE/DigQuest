/*
 * View Component
 */
let viewVisible = null;


/**
 * Create a new view
 * @param selector String: css selector of element
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
        this.visible = true;
        this.classList.add("view-visible");

        if (viewVisible) viewVisible.hide();
        viewVisible = this;
    }

    /** 
     * hide view
     */
    hide () {
        this.visible = false;
        this.classList.remove("view-visible");
    }
}