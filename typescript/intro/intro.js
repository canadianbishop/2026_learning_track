"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name = 'ayoola bishop';
var number = 3857;
console.log(name.toUpperCase());
console.log(number);
// functions
function sum(num) {
    return num + 3;
}
sum(7);
function getUpper(val) {
    return val.toUpperCase();
}
// a function that returns either one of two datatypes
var returnVal = function (val) {
    if (val > 5) {
        return true;
    }
    return val + 3;
};
var age = 29;
var birthday = '10-9-1993';
age = 30;
// birthday = '18-3-1889';
function calYearOfBirth(age) {
    var currentYear = new Date().getFullYear();
    return currentYear;
}
console.log(calYearOfBirth(35));
