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


const head = function (array) {
    return array[0];
}
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

var globalScope = 'I\'m all up in your codes!';

if (true) {
    let globalScope = 'Not anymore, you\'re not!';
}
console.log(globalScope);