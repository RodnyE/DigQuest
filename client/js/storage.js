/*
 * LocalStorage Manager
 */
 
const stg = {
    db: localStorage.getItem("storage") || {},
    
    /**
     * Get a stored value
     * @param id String - name of stored value
     * @param dfl Any - if not stored value, return this
     * @return - stored value
     */
    getData (id, dfl) {
        let db = this.db;
        if (db.hasOwnProperty(id)) return db[id];
        return dfl;
    },
    
    
    
    /**
     * Set a value
     * @param id String - name of value
     * @param value Any - a value to store
     * @return - value
     */
    setData (id, value) {
        this.db[id] = value;
        this.save();
        return value;
    },
    
    
    
    /**
     * Remove a specific value
     * @param id String - name of value
     */
    removeData (id) {
        delete this.db[id];
        this.save();
    },
    
    
    /**
     * Save data to local storage
     * @void
     */
    save () {
        localStorage.setItem("storage", JSON.stringify(this.db));
    }
}