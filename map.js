

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
//assertEqual(10, 10);
//assertEqual(5, 10);

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

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
//assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

// Test 1

const animals = ["dog", "cat", "girrafe", "elephant", "donkey"];
const moreAnimals = animals.map(item => { return item[0] })
console.log(moreAnimals);

assertEqual(animals.map(item => { return item[0] }))
//Test 2 

const numbers = [1, 2, 3, 4, 5, 6, 7]
const doubleNumbers = numbers.map(element => { return element * 2 })
console.log(doubleNumbers);
assertEqual(numbers.map(element => { return element * 2 }))
// Test 3 

let names = [
    { name: "Eric" },
    { name: "Teena" },
    { name: "Lisa" },
    { name: "Emma" },
]

let firstNames = names.map(function (x) { return x.name })
console.log(firstNames);
assertEqual(names.map(function (x) { return x.name })['Eric', 'Teena', 'Lisa', 'Emma'])
