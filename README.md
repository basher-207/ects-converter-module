# ects-converter-module

This is a npm module for converting scores from the 100-point grading system to the ECTS format.
It accepts only numbers in range 0 - 100.

## Installing

Using npm:

```bash
$ npm install ects-converter-module
```

Once the package is installed, you can import the library using `require` approach:

```js
const ECTS = require('ects-converter-module');
```

## Example

```js
const ECTS = require('ects-converter-module');

const score = 80;
const ectsInstance = new ECTS(score);
const ectsGrade = ectsInstance.ectsFromScore();

console.log(ectsGrade);
// expected output: "C" 
```