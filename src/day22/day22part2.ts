import fs = require("fs");
let input = fs.readFileSync("input22.txt", "utf8").replace(/\r/g, '').replace(/[\)\,]/g, '')
const players = input.split("\n\n")

let decks = {}


decks[1] = players[0].split('\n').slice(1).map(x => +x)
decks[2] = players[1].split('\n').slice(1).map(x => +x)

//console.log(decks)


let gameResult = game(decks[1], decks[2])
if(gameResult == 1){
    console.log("part2:", score(decks[1]))
}else {
    console.log("part2:", score(decks[2]))
}

function score(arr) {
    let total = 0
    arr.reverse()
    console.log(arr)
    for (var i = 0; i < arr.length; i++) {
        total += arr[i] * (i + 1)
    }
    return total
}

function game(deckA, deckB) {
    let prevDecksA = []
    let prevDecksB = []
    for (var i = 0; i < 30000000; i++) {
        //console.log(deckA, deckB)
        if (prevDecksA.includes(JSON.stringify(deckA)) || prevDecksB.includes(JSON.stringify(deckB))) {
            return 1
        } else {
            prevDecksA.push(JSON.stringify(deckA))
            prevDecksB.push(JSON.stringify(deckB))
        }
        let drawA = deckA.splice(0, 1)
        let drawB = deckB.splice(0, 1)
        if (drawA[0] <= deckA.length && drawB[0] <= deckB.length) {
            let gameResult = game([...deckA.slice(0, drawA[0])], [...deckB.slice(0, drawB[0])])
            if (gameResult == 1) {
                deckA.push(drawA[0])
                deckA.push(drawB[0])
            } else {
                deckB.push(drawB[0])
                deckB.push(drawA[0])
            }
        } else {
            if (drawA[0] > drawB[0]) {
                deckA.push(drawA[0])
                deckA.push(drawB[0])
            } else if (drawA[0] < drawB[0]) {
                deckB.push(drawB[0])
                deckB.push(drawA[0])
            }

            if (deckA.length == 0) {
                return -1
            }
            if (deckB.length == 0) {
                return 1
            }
        }
    }
}