// Bleskové úlohy 3
// 17.1. Vytvoř pole o pěti prvcích, vypiš z něj pátý.
const rada = [1, 5, 3, 4, 2]
console.log(rada[4])

// 17.2. Vytvoř řetězec o alespoň 5 znacích, vypiš z něj první znak.
const jejda = "kalamita"
console.log(jejda[0])

// 17.3. Vytvoř objekt uživetele s dvěmi klíči (name, surname). 
//       Vypiš celé jméno uživatele.

const objekt = {
    name: "Aleš",
    surname: "Dudek"
}

console.log(objekt.name + " " + objekt.surname)

// 17.4. Definuj funkci se třemi argumenty (třemi objekty), 
//       vypiš v ní třetí argument. Zavolej ji.
function triArgument(a, b, c /*argumen*/){
    console.log(c)
}

triArgument({a:"Praha"}, {b:"Brno"},{c:"Kladno"})
// 17.5. Vytvoř funkci o jednom argumentu (řetězci), 
//       která vrátí tento řetězec dvakrát. Zavolej ji.
function triArgument2 (retezec){
    return retezec + retezec
}
console.log(triArgument2("ABD"));
// 17.6. Vytvoř funkci o jednou argumentu (objektu), 
//       která vrátí všechny klíče tohoto objektu. Zavolej ji.
function kliceObjektu(objekt){
    return Object.keys(objekt);
}
const obj3 = {a:"", b:"",c:""}
console.log(kliceObjektu(obj3));

// 17.7. Definuj funkci bez argumentů, která vrátí libovolný objekt.
//       Zavolej ji, ulož výsledek do proměnné 
//       a vypiš hodnotu libovolného klíče.
function bezArgumentu() {
    return { a: "b", c: "d" }
}
vysledek = bezArgumentu();
console.log(vysledek.a);

// 17.8. Vytvoř pole nějakých čísel, 
//       jedním řádkem kódu z něj vyfiltruj lichá čísla, výsledek vypiš.
let pole = [1, 2, 3, 4, 5, 6, 7]
let poleCisel = [1, 11, 12, 98]

console.log(pole.filter(n => n % 2 === 0))
console.log(poleCisel.filter(n => n % 2 === 0));
