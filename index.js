// Add answers here

//#1

function nameOfCity(str) {
  if (
    str.slice(0, 3).toLowerCase() === "los" ||
    str.slice(0, 3).toLowerCase() === "new"
  ) {
    return str;
  } else {
    return `The city name does not begin with Los or New`;
  }
}

console.log(nameOfCity("Los Angeles"));

//#2

function isDivisible(int) {
  return int % 100 === 0;
}

console.log(isDivisible("48"));

//#3

function isRaining(boolean) {
  return boolean === true
    ? "wet day - you need an umbrella"
    : "dry day - leave your umbrella at home";
}

console.log(isRaining(false));

//#4

function geometricalSequence() {
  let a = 1;
  let numStr = "";
  for (let i = 0; i < 1; i++) {
    numStr += a + " ";
    for (let j = 0; j < 8; j++) {
      a *= 2;
      numStr += a + " ";
    }
  }

  return numStr;
}

console.log(geometricalSequence());

//#5

function multiplesOfThree() {
  let numStr = "";

  for (let i = 3; i <= 15; i = i + 3) {
    numStr += i + " ";
  }
  return numStr;
}

console.log(multiplesOfThree());

//#6

function powerOf(int) {
  return Math.pow(int, int);
}

console.log(powerOf(9));

//#7

function vowelCount(str) {
  let vowels = "aeiouAEIOU";
  let vowelCounter = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelCounter += 1;
    }
  }

  return vowelCounter;
}

console.log(vowelCount("aeio"));

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};
