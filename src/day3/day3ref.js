const fs = require("fs");
var input = fs.readFileSync("input3.txt", "utf8")

function testPath(input, right, down) {
    input = input.split('\n')
    for (var i = 0; i < input.length; i++) {
        input[i] = input[i].replace('\r', '')
        input[i] = input[i].split("")
    }
    
    var x = 0;
    var trees = 0;
    for (var y = 0; y < input.length - 1; y) {
        if (x + right < input[0].length) {
            x += right
        } else {
            x = x + right - (input[0].length)
        }
        y += down
        if (input[y][x] == "#") {
            trees++
            input[y][x] = "X"
        } else {
            input[y][x] = "O"
        }
    }
    return trees
}

console.log("part1:", testPath(input, 3, 1))

var part2 = testPath(input, 1, 1) * testPath(input, 3, 1) * testPath(input, 5, 1) * testPath(input, 7, 1) * testPath(input, 1, 2)

console.log("part2:", part2)