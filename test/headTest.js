const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head(["Emma", "Eric", "Emily"]), "Emma", "Eric");
