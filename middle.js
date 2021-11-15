const assertArraysEqual = function (arr1, arr2) {

    if (arr1 === arr2) {
        console.log(`Assertion Passed:${arr1} ===${arr2}`);
        return true;
    }
    else {
        console.log(`Assertion Failed:${arr1} !== ${arr2}`);
        return false;
    }
};
assertArraysEqual(10, 10);
assertArraysEqual(5, 10);

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
}
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => fals


function middle(array) {
    console.log(Math.round((array.length / 2)));
}

middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]