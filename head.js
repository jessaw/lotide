const assertEqual = require('./assertEqual');

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

module.exports = head;