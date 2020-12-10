import fs = require("fs");
const input = fs.readFileSync("input10.txt", "utf8").replace(/\r/g, '')
const jolts = input.split("\n").map(x => +x)

jolts.push(0)
jolts.sort((a, b) => {
    return a - b
})
jolts.push(jolts[jolts.length-1]+3)

let singleJolt = 0
let tripleJolt = 0

for (var i = 0; i < jolts.length; i++) {
    if (jolts[i + 1] - jolts[i] === 1) {
        singleJolt++
    } else if (jolts[i + 1] - jolts[i] === 3) {
        tripleJolt++
    }
}

console.log("part1", singleJolt * tripleJolt);

function testValid(jolt) {
    for (var i = 0; i < jolt.length; i++) {
        if (jolt[i + 1] - jolt[i] > 3) {
            return false
        }
    }
    return true
}

let canBeRemoved = []

for (var i = 1; i < jolts.length; i++) {
    if (jolts[i + 1] - jolts[i - 1] === 2) {
        canBeRemoved.push(jolts[i])
    }
}

//group removable parts together

let streaks = []

for (var i = 0; i < canBeRemoved.length; i++) {
    let currentStreak = [canBeRemoved[i]]
    for (var j = i + 1; j < canBeRemoved.length; j++) {
        if (canBeRemoved[j] - currentStreak[currentStreak.length - 1] === 1) {
            currentStreak.push(canBeRemoved[j])
            i++
        }
    }
    streaks.push(currentStreak)
}

function getCombinations(arr) {
    var result = [];
    var f = function (prefix, arr) {
        for (var i = 0; i < arr.length; i++) {
            result.push(prefix.concat(arr[i]));
            f(prefix.concat(arr[i]), arr.slice(i + 1));
        }
    }
    f([], arr);
    return result;
}

//calculate valid combos for group, then multiply with total combos

let arrangements = 1

for(var k = 0; k < streaks.length; k++){
    let validCombos = 1
    let combos = getCombinations(streaks[k])
    for(var i = 0; i < combos.length; i++){
        let testJolt = [...jolts]
        for(var j = 0; j < combos[i].length; j++){
            testJolt.splice(testJolt.indexOf(combos[i][j]), 1)
        }
        if(testValid(testJolt)){
            validCombos++
        }
    }
    arrangements*=validCombos
}

console.log("part2", arrangements)