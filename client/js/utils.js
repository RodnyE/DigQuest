/**
 * Helper
 */

// destroy object
Object.destroy = object => {
    
    Object.keys(object)
      .forEach(key => {
          delete object[key];
          return key;
      });
     
    Object.setPrototypeOf(object, null);
    
};