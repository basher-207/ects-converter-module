# ects-converter-module

This is a npm module for converting scores from the 100-point grading system to the ECTS format.
It accepts only numbers in range 0 - 100.

## Installing

Using npm:

```bash
$ npm install ects-converter
```

Once the package is installed, you can import the library using `require` approach:

```js
const ECTSconverter = require('ects-converter');
```

## Example

```js
const ECTSconverter = require('ects-converter');

const points = 80;
const myPointsToConvert = new ECTSconverter(points);

const gradeInEctsFormat = myPointsToConvert.ectsFromScore();

console.log(gradeInEctsFormat);
// expected output: "C" 
```