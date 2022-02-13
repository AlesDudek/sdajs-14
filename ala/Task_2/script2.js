//const pole = [1, 2, 3, 6, 7, 8, 71, 80, 82]
/*
pole.filter(x => {
    x % 2 === 0
    return true;
})

//console.log(pole.filter)

const novePole = []
for (let i = 0; i < pole.length; i++){
    if(pole[i]%2 === 0){
        novePole.push(pole[i])
    }
}

//console.log(novePole)

pole.forEach(x => {
    if (x % 2 === 0)
    novePole.push(x)
})

function filtrovani (pole, filtrovani){
    const novePole = []
    pole.forEach((x) => {
        if (filtrovani(x)){
        novePole.push(x)
        }
    })
    console.log(novePole);
    return novePole
}


console.log(filtrovani(pole, x => x > 3 && x < 80))


for (let i = 10; i < 21; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

function vyposCislaMezi(a, b){
    for (let i = a; i < b + 1; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}
*/
/**
 * *vypsání čísel od 10 do 20
 */
let i = 10;
while (i < 20) {
    console.log(i)
    i++
}
console.log(i)

console.log("//---------Další--příklad-----------//")

/**
 * * vypsání sudých čísel
 */
/*
function vyposCislaMezi(a, b){
    let i = a;
    while (i <= b) {
        if (i % 2 === 0){
            console.log(i)
        }
        i++
    }
}
vyposCislaMezi(10,20)
*/

let a = 5
let b = 6


const c = a + b

function soucet(a, b){
    return a + b
}
console.log(soucet(5, 6))

const ret = [1,2,3,4,5,6,7,8,9,10]

console.log(ret.splice(3))

const m = 5;
const n = 3

function nkratVypisM(m,n){
    for (let i = 0; i < n; i++){
        console.log(m)
    }
    
}

console.log(nkratVypisM(5, 3))

