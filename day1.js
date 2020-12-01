const fs = require("fs");
var input = fs.readFileSync("input1.txt", "utf8")
input = input.split('\n')

for(var i = 0; i < input.length; i++){
    for(var j = 0; j < input.length; j++){
        if(j!=i&&(Number(input[i])+Number(input[j])==2020)){
            console.log((Number(input[i])*Number(input[j])))
        }
    }
}

for(var i = 0; i < input.length; i++){
    for(var j = 0; j < input.length; j++){
        for(var k = 0; k < input.length; k++){
            if(j!=i&&i!=k&&(Number(input[i])+Number(input[j])+Number(input[k])==2020)){
                console.log((Number(input[k])*(Number(input[i])*Number(input[j]))))
            }
        }
    }
}