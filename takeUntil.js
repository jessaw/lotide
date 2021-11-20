

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


const takeUntil = function () {
    // ...
}

const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubleNum = takeUntil(num, x => x % 2 === 0);
console.log(doubleNum);


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
