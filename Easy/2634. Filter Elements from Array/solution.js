/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {

    // Create an empty array to store the filtered elements
    let result = [];

    // Loop through every element in the array
    for (let i = 0; i < arr.length; i++) {

        // If fn returns true, keep the original element
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }

    }

    // Return the filtered array
    return result;
};