onst eqObjects = function (object1, object2) {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
    }
}
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
    // Implement me!
};

const assertObjectsEqual = function (actual, expected) {
    const inspect = require('util').inspect; // <= add this line
    // ...
};
console.log(`Example label: ${inspect(actual)}`);