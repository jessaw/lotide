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


const findKey = function (object, callback) {
    for (key in object) {                          // used a for in loop; because this is an object
        //console.log(callback(object[key]))
        if (callback(object[key])) {
            return key;
        }
    }
    return undefined;
};


assertEqual(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"

module.exports = findKey;