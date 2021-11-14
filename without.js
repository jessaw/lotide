=
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
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false



function newValue(src, itemstoremove) {
    return _.without(src, itemstoremove);
}
without([1, 2, 3], [1]) // => [2, 3]

//without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
/*
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); */