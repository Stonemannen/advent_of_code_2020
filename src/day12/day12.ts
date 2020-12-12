import fs = require("fs");
const input = fs.readFileSync("input12.txt", "utf8").replace(/\r/g, '')

let reg = /([A-Z])(\d*)/g

enum direction {
    east,
    south,
    west,
    north,
}

let directions = [{
    direction: direction.east,
    x: 1,
    y: 0
}, {
    direction: direction.south,
    x: 0,
    y: 1
}, {
    direction: direction.west,
    x: -1,
    y: 0
}, {
    direction: direction.north,
    x: 0,
    y: -1
}]

let facing = direction.east
let posX = 0
let posY = 0

let r;
while (r = reg.exec(input)) {
    let index
    let turnBy
    console.log(r[1])
    switch (r[1]) {
        case 'F':
            let moves = directions.find(o => o.direction === facing);
            posX += moves.x * Number(r[2])
            posY += moves.y * Number(r[2])
            break;
        case 'N':
            posY += -1 * Number(r[2])
            break;
        case 'S':
            posY += 1 * Number(r[2])
            break;
        case 'E':
            posX += 1 * Number(r[2])
            break;
        case 'W':
            posX += -1 * Number(r[2])
            break;
        case 'L':
            index = directions.findIndex(o => o.direction === facing);
            turnBy = ((Number(r[2])) / 90)
            console.log(turnBy)
            facing = directions[((4 + index - turnBy) % 4)].direction
            break;
        case 'R':
            index = directions.findIndex(o => o.direction === facing);
            turnBy = ((Number(r[2])) / 90)
            facing = directions[(index + turnBy) % 4].direction
            break;
        default:
            break;
    }
    console.log(posX, posY, direction[facing])
}

console.log("part1:", Math.abs(posX)+Math.abs(posY))