const assertArraysEqual = require('../assertArraysEqual');


const middle = function (array) {
    if (array.length <= 2) {
        return [];// if length or array is less than or equal to 2. Return empty array 
    } else if (array.length % 2 === 0) { // if array is even, return 2 middle indices of the array
        return [array[Math.floor(array.length / 2) - 1], array[Math.floor(array.length / 2)]]
    } else {
        return [array[Math.floor(array.length / 2)]]; // if array is odd, return the middle index
    }

};



middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

assertArraysEqual(20, 20);
assertArraysEqual("dog", "cat");

console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4, 5, 6, 7]));