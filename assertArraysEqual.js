const eqArrays = require("./eqArrays");

const assertArraysEqual = function (arr1, arr2) {

    if (eqArrays(arr1, arr2)) {
        console.log(`Assertion Passed:${arr1} ===${arr2}`);
        return true;
    }
    else {
        console.log(`Assertion Failed:${arr1} !== ${arr2}`);
        return false;
    }
};
//assertArraysEqual(20, 20);//
assertArraysEqual(15, 30);

module.exports = assertArraysEqual;