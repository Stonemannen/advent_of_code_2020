const input = "394618527"
let rawCups = input.split('').map(x => +x)

let cups = new Map()

for(var i = 0; i < rawCups.length-1; i++){
    cups.set(rawCups[i], rawCups[i+1])
}
cups.set(rawCups[rawCups.length-1], 10)
for(var i = 10; i < 1000000; i++){
    cups.set(i, i+1)
}

cups.set(1000000, rawCups[0])

let current = 3

let highest = 1000000

for(var i = 0; i < 10000000; i++){
    let pickupA = cups.get(current)
    let pickupB = cups.get(pickupA)
    let pickupC = cups.get(pickupB)

    cups.set(current, cups.get(pickupC))
    let destination = current-1
    if(destination < 1){
        destination = highest
    }
    for(var j = 0; j < 100000; j++){
        if(!(destination == pickupA||destination==pickupB||destination==pickupC)){
            break
        }
        destination--;
        if(destination < 1){
            destination = highest
        }
    }

    let temp = cups.get(destination)
    cups.set(destination, pickupA)
    cups.set(pickupC, temp)
    current = cups.get(current)
}

//print(cups)

let one = cups.get(1)
let two = cups.get(one)

console.log("part2", one*two)

function print(map){
    let str = ""
    let r=1;
    r=map.get(r)
    str+=r
    while(r!=1){
        r=map.get(r)
        str+=r
    }
    console.log(str.slice(0, str.length-1))

}
