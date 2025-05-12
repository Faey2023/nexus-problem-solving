"use strict";
// 6. Task: Leap Year Checker
// Write a function that determines whether a given year is a leap year.
// Example: Happy New Year
const leapYearChecker = (year) => {
    const result = year % 4;
    if (result == 0) {
        console.log(`${year} is a leap year`);
    }
    else {
        console.log(`${year} is not a leap year`);
    }
    return result;
};
leapYearChecker(2025);
