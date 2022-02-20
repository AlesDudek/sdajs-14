






// 16. Bleskové úlohy 2
// 16.1. Vytvoř číselnou proměnnou, vytvoř jinou proměnnou, 
//       která k první proměnné přidá 5
let cislo = 5;
let znak = 7;
let soucet = cislo + znak;
console.log(soucet)
//_____________________
let a = 3
let b = a + 5;
console.log(b)

// 16.2. Ulož řetězec do proměnné, přidej k němu na konec "!!!" ("+")

const zhorna = [5,7,9,]
zhorna.push("+")
console.log(zhorna)

const retez = "Hello"
console.log(retez + " !!!!")

// 16.3. Vytvoř objekt s jedním klíčem a hodnotou, 
//       vytáhni hodnotu u tohoto klíče a vypiš ji. 
//       Přidej do objektu další dvojici klíč/hodnota.

const objekt = {
    key: 25
};
console.log(objekt.key);
objekt.zasuvka = "kolo";
console.log(objekt);

// 16.4. Vytvoř pole se třemi prvky, vyber z pole druhý prvek (index, []) 
//       a vypiš ho.

let kolekce = [ "maso", "sádlo", "okurka"]
console.log(kolekce[2]);

// 16.5. Vytvoř funkci se třemi argumenty. Druhý argument bude číslo, 
//       které funkce vezme, přičte k němu 5 a vrátí ho.
//       Vypiš výsledek volání s argumenty ({}, 0, ""). 
//       Vypiš výsledek volání s argumenty ("1", "2", "3").
function triArgumenty(jedna, dva, tri) {
    return dva + 5;
}
console.log(triArgumenty({}, 0, ""));
console.log(triArgumenty("1", "2", "3"));
"2" + 5 === "25"


// 16.6. Vytvoř třídu Person, 
//       jejíž konstruktor bude mít jeden argument `name`. 
//       Vytvoř instanci této třídy a vypiš ji.

class Person{
    constructor(name){
        this.name = name
    }
}
let person = new Person("Aleš")
console.log(person)