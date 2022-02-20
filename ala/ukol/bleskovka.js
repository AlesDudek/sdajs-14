// 15. Bleskové úlohy
// 15.1. Definuj funkci se třemi argumenty, první číslo, 
//       druhý řetězec, třetí argument bude objekt, a zavolej ji.
function fraska(a, b, c){
}
fraska(5,"k",{})

// 15.2. Definuj funkci bez argumentů, která vrací číslo 42. 
//       Zavolej ji, ulož výsledek do proměnné a vypiš tuto proměnnou.
const vraci42 = () => 42;

function vraci_42(){
    return 42
}
const promena = vraci42()
console.log(promena)
// 15.3. Vytvoř objekt. Na dalším řádku do něj přidej další klíč a hodnotu, 
//       tento klíč pak z objektu smaž.
const objekt = {};
objekt.klic = "hodnota";
delete objekt.klic;

// 15.4. Vytvoř pole. Do pole programově přidej tři čísla, 
//       odeber pak poslední z nich.
pole = []
pole.push(1, 2, 3);
pole.pop()
console.log(pole)

// 15.5. Vytvoř pole nějakých čísel, jedním řádkem kódu 
//       z něj vyfiltruj sudá čísla, výsledek vypiš.
pole = [1, 11, 12, 98]
console.log(pole.filter(n => n % 2 === 1))

// 15.6. Vytvoř objekt s nějakými daty. Získej z něj (programově)
//       všechny klíče a všechny hodnoty a vypiš je.
const obj = {
    "klic": "hodnota",
    "cislo": 5,
    "objekt":{}
};
console.log(Object.keys(obj));
console.log(Object.values(obj));

// 15.7. Vytvoř řetězec. Vytvoř další proměnnou, 
//       která bude obsahovat tento řetězec 2x za sebou ("+"!!!).
//       Vypiš jejich délku.
const retezec = "123"
const retezecX2 = retezec + retezec;
console.log(retezec.length);
console.log(retezecX2.length);
// 15.8. Definuj funkci plusJedna(n), 
//       která vrátí n + 1. Zavolej ji a vypiš výsledek.
function plusJedna (n){
    return n + 1;
}
console.log(plusJedna(9));

// 15.9. Definuj funkci jeVetsiNezPet s jedním argumentem, 
//       která vrací, jestli je větší než pět. Zavolej ji a vypiš.
function jeVetsiNezPet(n){
    return n > 5;
    /*
    if (n>5 ){
        return true;
    } else if {
        return false;
    }
    */
}

// 15.10. Definuj funkci zvetsiPole s jedním argumentem, která do pole, 
//        které dostane, přidá [5, 6, 7]. (concat!!!)

function zvetsiPole(pole){
    return pole.concat([5, 6, 7]);
}
console.log(zvetsiPole([0, 0, 0]));
