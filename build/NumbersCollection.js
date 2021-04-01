"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (leftIdx, rightIdx) {
        return this.data[leftIdx] > this.data[rightIdx];
    };
    NumbersCollection.prototype.swap = function (leftIdx, rightIdx) {
        // reference for right element
        var temp = this.data[rightIdx];
        this.data[rightIdx] = this.data[leftIdx];
        this.data[leftIdx] = temp;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
