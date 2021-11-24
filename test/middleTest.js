
const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
    it('should return [] for [1])', () => {
        assert.deepEqual(middle([1]), []);
    });
    it('should return [2] for [1,2,3]', () => {
        assert.deepEqual(middle([1, 2, 3]), [2]);
    });
    it('shoudl return [3] for [1,2,3,4,5]', () => {
        assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
    })
});

