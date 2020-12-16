import fs = require("fs");
const tickets = fs.readFileSync("tickets.txt", "utf8").replace(/\r/g, '')
let nearbyTickets: any = tickets.split("\n")


const rawFields = fs.readFileSync("fields.txt", "utf8").replace(/\r/g, '')

const yourTicket = [157,59,163,149,83,131,107,89,109,113,151,53,127,97,79,103,101,173,167,61]

let fields = []

const reg = /([\w ]+):\s(\d+)-(\d+) or (\d+)-(\d+)/g
let r;

while (r = reg.exec(rawFields)) {
    fields.push({
        name: r[1],
        lowerMin: Number(r[2]),
        lowerMax: Number(r[3]),
        upperMin: Number(r[4]),
        upperMax: Number(r[5])
    });
}

let errorRate = 0

for (var i = 0; i < nearbyTickets.length; i++) {
    nearbyTickets[i] = nearbyTickets[i].split(',').map(x => +x)
    for (var j = 0; j < nearbyTickets[i].length; j++) {
        let valid = false
        for (var k = 0; k < fields.length; k++) {
            if (nearbyTickets[i][j] <= fields[k].lowerMax && nearbyTickets[i][j] >= fields[k].lowerMin) {
                valid = true
                break;
            } else if (nearbyTickets[i][j] <= fields[k].upperMax && nearbyTickets[i][j] >= fields[k].upperMin) {
                valid = true
                break;
            }
        }
        if (!valid) {
            errorRate += nearbyTickets[i][j]
            nearbyTickets.splice(i, 1)
            i--
        }
    }
}

console.log("part1", errorRate)

let posFields = []

for (var i = 0; i < nearbyTickets[0].length; i++) {
    let possibleFields = [...fields]
    for (var k = 0; k < possibleFields.length; k++) {
        let valid = true
        for (var j = 0; j < nearbyTickets.length; j++) {
            if (!((nearbyTickets[j][i] <= possibleFields[k].lowerMax && nearbyTickets[j][i] >= possibleFields[k].lowerMin) || (nearbyTickets[j][i] <= possibleFields[k].upperMax && nearbyTickets[j][i] >= possibleFields[k].upperMin))) {
                valid = false
                break;
            }
        }
        if (!valid) {
            possibleFields.splice(k, 1)
            k--
        }
    }
    posFields.push(possibleFields)
}

for (var l = 0; l < posFields.length; l++) {
    for (var i = 0; i < posFields.length; i++) {
        if (posFields[i].length == 1) {
            for (var j = 0; j < posFields.length; j++) {
                if (j !== i) {
                    for (var k = 0; k < posFields[j].length; k++) {
                        if (posFields[j][k].name == posFields[i][0].name) {
                            posFields[j].splice(k, 1)
                            k--
                        }
                    }
                }
            }
        }
    }
}

let part2 = 1

for(var i = 0; i < posFields.length; i++){
    if(posFields[i][0].name.includes('departure')){
        part2*=yourTicket[i]
    }
}
console.log("part2", part2)