/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

var join = function(arr1, arr2) {

    const map = new Map();



    // Populate the map with objects from arr1

    for (const obj of arr1) {

        map.set(obj.id, obj);

    }



    // Merge objects from arr2

    for (const obj of arr2) {

        if (map.has(obj.id)) {

            // Merge existing object with object from arr2

            map.set(obj.id, { ...map.get(obj.id), ...obj });

        } else {

            // Add object from arr2 to the map

            map.set(obj.id, obj);

        }

    }



    // Convert map values to array and sort by id

    return [...map.values()].sort((a, b) => a.id - b.id);

};
