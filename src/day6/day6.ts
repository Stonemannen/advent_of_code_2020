import fs = require("fs");
const input = fs.readFileSync("input6.txt", "utf8").replace(/\r/g, '')
const declarationForm = input.split("\n\n")

let part1 = 0;
let part2 = 0;

for(var i = 0; i < declarationForm.length; i++){
    const people = declarationForm[i].split('\n')
    
    const group = people.join('')
    const unique = removeDuplicateCharacters(group)
    part1 += unique.length
    for(var j = 0; j < unique.length; j++){
        if((group.match(new RegExp(unique[j], "g")) || []).length == people.length){
            part2++
        }
    }
}

console.log("part1 ", part1)
console.log("part2 ", part2)

function removeDuplicateCharacters(string) {
    return string
      .split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
  }

