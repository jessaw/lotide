const eqArrays = require('../eqArrays')
const assertEqual = require('../assertEqual')

assertEqual(eqArrays(['dog', 'cat', 'monkey'], ['dog', 'cat', 'monkey']), true) // => true
assertEqual(eqArrays([5, 4, 3], [1, 2, 3]), false) // => false
