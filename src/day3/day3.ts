import fs = require("fs");
var input = fs.readFileSync("input3.txt", "utf8").replace(/\r/g, '')

function testPath(input: string, right, down) {
    var map: Array<string> = input.split('\n')
    
    var x = 0;
    var trees = 0;
    for (var y = 0; y < map.length - 1; y) {
        if (x + right < map[0].length) {
            x += right
        } else {
            x = x + right - (map[0].length)
        }
        y += down
        if (map[y][x] == "#") {
            trees++
        }
    }
    return trees
}

console.log("part1:", testPath(input, 3, 1))

var part2 = testPath(input, 1, 1) * testPath(input, 3, 1) * testPath(input, 5, 1) * testPath(input, 7, 1) * testPath(input, 1, 2)

console.log("part2:", part2)