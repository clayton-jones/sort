"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var sorter = new Sorter_1.Sorter([1, 4, -1, -20, 32, 10]);
sorter.sort();
console.log(sorter.collection);
