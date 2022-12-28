/*
 * {{UPNAME}} Component
 */

/**
 * Create a new {{NAME}}
 * @param selector String: css selector of element
 */
class {{UPNAME}}Component {
    
    constructor (selector) {
        const el = document.querySelector(selector);
        el.classList.add("{{NAME}}");

        this.element = el;
    }

    /**
     * An awesome method!
     * @param n Number: an awesome number
     * @return the number
     */
    method (n) {
        return n;
    }
}