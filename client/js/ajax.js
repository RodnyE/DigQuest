/**
* POST/GET
*/

const ajax = {
    
    /**
     * Make GET request
     * @param {String} url
     * @return {Promise} 
     *   `resolve({status, data})` if httpStatus is 200
     *   `reject({status, data})` if HTTP ERROR
     */
    get (url) {
        return new Promise((resolve, reject) => {
            const http = ajax._createRequest(resolve, reject);
            http.open("GET", url);
            http.send();
        });
    },
    
    
    
    /**
     * Make GET request
     * @param {String} url
     * @param {Object} data 
     * @return {Promise}
     */
    post (url, data) {
        return new Promise((resolve, reject) => {
            const http = ajax._createRequest(resolve, reject);
            http.setRequestHeader("Content-Type", "application/json");
            http.open("POST", url);
            http.send(JSON.stringify(data));
        });
    },
    
    
    
    /** 
     * Create a new XMLHttpRequest object
     * @return {XMLHttpRequest}
     * @private
     */
    _createRequest (resolve, reject) {
        const http = new XMLHttpRequest();
        http.onreadystatechange = () => {
            if (http.readyState === 4) {
                let status = http.statusText;
                let data = http.responseText;
                
                try {
                    data = JSON.parse(data);
                } catch (e) {}
                
                if (status === 200) resolve({status, data});
                else reject({status, data});
            }
        };
        
        return http;
    }

}