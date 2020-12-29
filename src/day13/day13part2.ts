import fs from "fs";
let input: any = fs.readFileSync("input13.txt", "utf8").replace(/\r/g, '').replace(/x/g, '1');
input = input.split("\n");

console.log(input);

let busses = input[1].split(',').map(x => +x);

let pattern = [];
let minimumCorrect = 10;
let k = 1;
let m = 0;

for (var j = 0; j < 100000000000000000; j++)
{
    let t = m + (j * k);
    let departsRight = 0;

    for (var i = 0; i < busses.length; i++)
    {
        if ((t + i) % busses[i] === 0)
        {
            departsRight++;
        }
        else
        {
            break;
        }
    }

    if (departsRight > minimumCorrect)
    {
        pattern.push(t);
        if (pattern.length > 2)
        {
            k = pattern[1] - pattern[0];
            m = pattern[0];
            minimumCorrect++;
            j = 0;
            pattern = [];
        }
    }

    if (departsRight == busses.length)
    {
        console.log("part2: ", t);
        break;
    }
}
