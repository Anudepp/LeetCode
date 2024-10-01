/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {

    // Check if the object is an array and empty

    if (Array.isArray(obj) && obj.length === 0) {

        return true;

    }



    // Check if the object is an object and has no keys

    if (typeof obj === 'object' && Object.keys(obj).length === 0) {

        return true;

    }



    return false;

};