/*
 * LocalStorage Manager
 */
 
const stg = {
    
    // database
    db: (() => {
        const db = localStorage.getItem("storage");
        
        if (db) return JSON.parse(db);
        return {};
    })(),
    
    
    
    /**
     * Get a stored value
     * @param {String} id - name of stored value
     * @param {*} dfl - if not stored value, return this
     * @return {*} stored value or `dfl`
     */
    getData (id, dfl) {
        if (this.checkData(id)) return this.db[id];
        return dfl;
    },
    
    
    
    /**
     * Set a value
     * @param {String} id - name of value
     * @param {*} value - a value to store
     * @return {*} the `value` param
     */
    setData (id, value) {
        this.db[id] = value;
        this.save();
        return value;
    },
    
    
    
    /**
     * Remove a specific value
     * @param {String} id - name of value
     */
    removeData (id) {
        delete this.db[id];
        this.save();
    },
    
    
    
    /**
     * Verify if exist a stored value
     * @param {String} id - name of value to verify
     * @return {Boolean} if exist or not
     */
    checkData (id) {
        return this.db.hasOwnProperty(id);
    },
    
    
    /**
     * Save data to local storage
     */
    save () {
        localStorage.setItem("storage", JSON.stringify(this.db));
    }
}