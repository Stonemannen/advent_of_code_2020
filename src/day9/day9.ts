import fs = require("fs");
const input = fs.readFileSync("input9.txt", "utf8").replace(/\r/g, '')
var numbers = input.split("\n").map(x=>+x)
const preampleLength = 25

for(var i = preampleLength; i < numbers.length; i++){
    if(!valid(i, numbers[i])){
        console.log("part1:", numbers[i])
        for(var j = 0; j < numbers.length; j++){
            let sum = 0;
            let values = []
            for(var k = j; k < numbers.length; k++){
                sum += numbers[k]
                values.push(numbers[k])
                if(sum === numbers[i]){
                    values.sort((a, b) => {return a- b})
                    console.log("part2:", values[0]+values[values.length-1])
                    process.exit(0)
                }else if(sum > numbers[i]){
                    break;
                }
            }
        }
    }
}


function valid(currentPos: number, number: number){
    for(var i = currentPos-preampleLength; i < currentPos; i++){
        for(var j = currentPos-preampleLength; j < currentPos; j++){
            if(i != j){
                if(numbers[i]+numbers[j] === number){
                    return true
                }
            }
        }
    }
    return false
}