
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
}
//assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
//assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false


const without = function (src, itemsToRemove) {
    let newSrc = src.filter(index => itemsToRemove.indexOf(index) === -1);
    return newSrc;
}


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

