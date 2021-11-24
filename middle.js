/*const assertArraysEqual = function (arr1, arr2) {

    if (arr1 === arr2) {
        console.log(`Assertion Passed:${arr1} ===${arr2}`);
        return true;
    }
    else {
        console.log(`Assertion Failed:${arr1} !== ${arr2}`);
        return false;
    }
};
//assertArraysEqual(10, 10);
//assertArraysEqual(5, 10);

function eqArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    else {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }

        }
        return true;
    }
}*/
//assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
//assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false


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

console.log(middle([1, 2]));

module.exports = middle;