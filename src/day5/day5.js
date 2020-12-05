"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const input = fs.readFileSync("input5.txt", "utf8").replace(/\r/g, '');
const boardingPasses = input.split("\n");
let highestId = 0;
let IDs = [];
for (var i = 0; i < boardingPasses.length; i++) {
    let id = getId(boardingPasses[i]);
    IDs.push(id);
    if (id > highestId) {
        highestId = id;
    }
}
console.log("part1 ", highestId);
IDs.sort((a, b) => {
    return a - b;
});
for (var i = 0; i < IDs.length; i++) {
    if (IDs[i + 1] - IDs[i] === 2) {
        console.log("part2 ", IDs[i] + 1);
    }
}
function getId(boardingPass) {
    const binary = boardingPass.replace(/F|L/g, '0').replace(/B|R/g, '1');
    const row = parseInt(binary.slice(0, 7), 2);
    const column = parseInt(binary.slice(7, 10), 2);
    return (row * 8) + column;
}
//# sourceMappingURL=day5.js.map