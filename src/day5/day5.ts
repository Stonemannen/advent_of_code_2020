import fs = require("fs");
var input = fs.readFileSync("input5.txt", "utf8").replace(/\r/g, '')
var boardingPasses = input.split("\n")

var highestId = 0;

var IDs: Array<number> = []

for(var i = 0; i < boardingPasses.length; i++){
    let id = getId(boardingPasses[i])
    IDs.push(id)
    if(id > highestId){
        highestId = id
    }
}
console.log("part1 ", highestId)

IDs.sort(function(a, b) {
    return a - b;
  });

for(var i = 0; i < IDs.length; i++){
    if(IDs[i+1]-IDs[i]===2){
        console.log("part2 ", IDs[i]+1)
    }
}


function getId(boardingPass: string){
    let binaryRow = boardingPass.slice(0,7).replace(/F/g, '0')
    binaryRow = binaryRow.replace(/B/g, '1')
    var row = parseInt(binaryRow, 2)

    var binaryColumn = boardingPass.slice(7,10).replace(/L/g, '0')
    binaryColumn = binaryColumn.replace(/R/g, '1')
    var column = parseInt(binaryColumn, 2)

    return (row*8) + column
}