import fs = require("fs");
let input = fs.readFileSync("input22.txt", "utf8").replace(/\r/g, '').replace(/[\)\,]/g, '')
const players = input.split("\n\n")

let decks = {}


decks[1] = players[0].split('\n').slice(1).map(x => +x)
decks[2] = players[1].split('\n').slice(1).map(x => +x)

console.log(decks)


function score(arr){
    let total = 0
    arr.reverse()
    console.log(arr)
    for(var i = 0; i < arr.length; i++){
        total += arr[i]*(i+1)
        //console.log(arr[i], (i+1))
    }
    return total
}

for(var i = 0; i < 300000; i++){
    let drawA = decks[1].splice(0, 1)
    let drawB = decks[2].splice(0, 1)
    //console.log(decks)
    if(drawA[0] > drawB[0]){
        decks[1].push(drawA[0])
        decks[1].push(drawB[0])
    }else if(drawA[0] < drawB[0]){
        decks[2].push(drawB[0])
        decks[2].push(drawA[0])
    }

    if(decks[1].length == 0){
        console.log(score(decks[2]))
        break
    }
    if(decks[2].length == 0){
        console.log(score(decks[1]))
        break
    }
}



console.log(decks)
