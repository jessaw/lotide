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
assertEqual(10, 10);
assertEqual(5, 10);

const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
};

const findKeyByValue = function (object, value) {
    for (let prop in object) {
        if (object[prop] === value) {
            return prop;
        }
    }
}
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;