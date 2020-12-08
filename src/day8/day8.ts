import fs = require("fs");
const input = fs.readFileSync("input8.txt", "utf8").replace(/\r/g, '')
var program: Instruction[] = []

enum Operation {
    acc = 'acc',
        jmp = 'jmp',
        nop = 'nop'
}

interface Instruction {
    operation: Operation,
        argument: number
}

const reg = /(\w{3})\s([+-]\d+)/g

let r;

while (r = reg.exec(input)) {
    program.push({
        operation: Operation[r[1]],
        argument: Number(r[2])
    });
}


const findDuplicates = (arr) => {
    let sorted_arr = arr.slice().sort();
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
            results.push(sorted_arr[i]);
        }
    }
    return results;
}

function runProgram(program: Instruction[]): {
    infinite: boolean,
    accumulator: Number
} {
    let accumulator = 0;

    let visitedInstructions = []

    for (let i = 0; i < program.length; i++) {
        visitedInstructions.push(i)
        if (findDuplicates(visitedInstructions).length > 0) {
            //console.log(accumulator)
            return {
                infinite: true,
                accumulator: accumulator
            };
        }
        switch (program[i].operation) {
            case Operation.acc:
                accumulator += program[i].argument
                break;
            case Operation.jmp:
                i += program[i].argument - 1
                break;

            default:
                break;
        }
    }
    return {
        infinite: false,
        accumulator: accumulator
    }
}

function testProgram(program: Instruction[]) : boolean{
    let result = runProgram(program)
    if (!result.infinite) {
        console.log("part2:", result.accumulator)
        return true
    }
    return false
}

console.log("part1:", runProgram(program).accumulator)

for (var i = 0; i < program.length; i++) {
    let modifiedProg = JSON.parse(JSON.stringify(program))
    if (modifiedProg[i].operation === Operation.nop) {
        modifiedProg[i].operation = Operation.jmp
    } else if (modifiedProg[i].operation === Operation.jmp) {
        modifiedProg[i].operation = Operation.nop
    }

    if (testProgram(modifiedProg))
        break
}