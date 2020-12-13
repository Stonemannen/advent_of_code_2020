import fs = require("fs");
let input:any = fs.readFileSync("input13.txt", "utf8").replace(/\r/g, '').replace(/,x/g, '')
input = input.split("\n")

console.log(input)

let busses = input[1].split(',')

let earliest = Number.MAX_SAFE_INTEGER
let bus

for(var i = 0; i < busses.length; i++){
    let time = 0
    for(var j = 0; j < 10000000000; j++){
        if(time > Number(input[0])){
            if(time < earliest){
                earliest = time
                bus = busses[i]
            }
            break;
        }
        time += Number(busses[i])
    }
}
let waitTime = earliest-Number(input[0])

console.log("part1:", waitTime*bus)