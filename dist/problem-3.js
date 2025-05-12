"use strict";
// 3.Task: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
//square
const numberSquared = (number) => {
    const givenNumber = number * number;
    return givenNumber;
};
//double
const numberDoubled = (number) => {
    const givenNumber = number * 2;
    return givenNumber;
};
//add five
const addFive = (number) => {
    const givenNumber = number + 5;
    return givenNumber;
};
const result33 = addFive(12);
const compose = (number) => {
    return addFive(numberDoubled(numberSquared(number)));
};
const result3 = compose(3);
console.log(result3);
