"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
//values of two variables
var a = 4;
var b = 40;
//to swap both the numbers we use destructing method
_a = [b, a], a = _a[0], b = _a[1];
console.log(chalk_1.default.red.bold("The value of a is ".concat(a, " and the value of b is ").concat(b)));
