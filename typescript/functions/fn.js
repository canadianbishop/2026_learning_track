"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scores = [29, 93, 2, 4];
var updatedScores = scores.map(function (score) {
    return score < 10 ? score + 5 : score;
});
console.log(updatedScores);
function generateName(val) {
    if (typeof val === 'string') {
        return "your name is ".concat(val);
    }
    return false;
}
console.log(generateName(29));
