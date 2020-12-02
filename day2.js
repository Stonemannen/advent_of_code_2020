const fs = require("fs");
var input = fs.readFileSync("input2.txt", "utf8")
input = input.split('\n')

var valid = 0;

for(var i = 0; i < input.length; i++){
    input[i] = input[i].split(" ")
    var count = (input[i][2].split(input[i][1][0]).length - 1)
    if(count >= Number(input[i][0].split("-")[0])&&count <= Number(input[i][0].split("-")[1])){
        valid++
    }
}

console.log("valid ", valid)
var input = fs.readFileSync("input2.txt", "utf8")
input = input.split('\n')

var valid = 0;

for(var i = 0; i < input.length; i++){
    input[i] = input[i].split(" ")
    var times = 0;
    if(input[i][2][Number(input[i][0].split("-")[0])-1] == input[i][1][0]){
        times++
    }
    if(input[i][2][Number(input[i][0].split("-")[1])-1] == input[i][1][0]){
        times++
    }
    if(times === 1){
        valid++
    }


}

console.log("valid part 2", valid)