"use strict";
// 1. Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.
const people = [
    { name: "Faheema", age: 25, gender: "female" },
    { name: "Farhana", age: 20, gender: "female" },
    { name: "Faiz", age: 12, gender: "male" },
    { name: "Fahad", age: 18, gender: "male" },
];
const getNonFemaleNames = (personArray) => {
    const nonFemales = personArray.filter((person) => person.gender !== "female");
    const names = nonFemales.map((person) => person.name);
    return names;
};
const result = getNonFemaleNames(people);
console.log(result);
