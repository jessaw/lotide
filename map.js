



const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

const assertArraysEqual = function (arr1, arr2) {

    if (eqArrays(arr1, arr2)) {
        console.log(`Assertion Passed: ${arr1}=== ${arr2}`);
        return true;
    }
    else {
        console.log(`Assertion Failed:${arr1} !== ${arr2}`);
        return false;
    }
};

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


assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't'])
assertArraysEqual(map(words, word => word.length * 2), [6, 7, 2, 5, 3])
assertArraysEqual(map(words, word => word[2]), ["O", "N", "", "J", "M"]);

module.exports = map;