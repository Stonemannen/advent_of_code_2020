import fs = require("fs");
const input = fs.readFileSync("input12.txt", "utf8").replace(/\r/g, '')

let reg = /([A-Z])(\d*)/g

let posX = 0
let posY = 0

let waypoint = {
    x: 10,
    y: -1
}

let r;
while (r = reg.exec(input)) {
    let turnBy
    console.log(r[1])
    switch (r[1]) {
        case 'F':
            posX += waypoint.x * Number(r[2])
            posY += waypoint.y * Number(r[2])
            break;
        case 'N':
            waypoint.y += -1 * Number(r[2])
            break;
        case 'S':
            waypoint.y += 1 * Number(r[2])
            break;
        case 'E':
            waypoint.x += 1 * Number(r[2])
            break;
        case 'W':
            waypoint.x += -1 * Number(r[2])
            break;
        case 'L':
            turnBy = ((Number(r[2])) / 90)
            for (var i = 0; i < turnBy; i++) {
                let x = waypoint.y
                let y = -waypoint.x
                waypoint.x = x
                waypoint.y = y
            }
            break;
        case 'R':
            turnBy = ((Number(r[2])) / 90)
            for (var i = 0; i < turnBy; i++) {
                let x = -waypoint.y
                let y = waypoint.x
                waypoint.x = x
                waypoint.y = y
            }

            break;
        default:
            break;
    }
    console.log(posX, posY)
}

console.log("part2:", Math.abs(posX) + Math.abs(posY))