const assertEqual = function (actual, expected) {

    if (actual === expected) {
        console.log(`Assertion Passed:${actual} ===${expected}`);
        return true;
    }
    else {
        console.log(`Assertion Failed:${actual} !== ${expected}`);
        return false;
    }
};
assertEqual(10, 10);
assertEqual(5, 10);


// implement a function for Lotide that can easily compare two arrays and check if it's a perfect match.//


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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

//eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
//eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
