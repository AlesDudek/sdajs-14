/*
10 oop
Opakovací úlohy 2:
10.1 Vytvořte funkci hello(name), která dostane jméno a vrátí řetězec "Hello,
[name]!"
*/
function hell(name){
    console.log("HELLO" + " " + name);
}
hell("Aleš")

/*
10.2 Vytvořte třídu Person, 
která bude v konstruktoru mít jedinou vlastnost/atribut name
*/
/*
class Person{
    constructor(name){
        this.name = name
    }
}

let person = new Person("Larysa")
console.log(person);
console.log(person.name);
*/


/*
10.3 Do třídy přidejte metodu "greet()", která vrátí řetězec "Hello, 
[name]!", přičemž name bude jméno osoby předané v konstruktoru
*/

class Person{
    constructor(name){
        this.name = name
    }
    greet(){
        return "Hello" + " " + this.name
    }
};
let person = new Person("Evička")
console.log(person.greet())


// 11. Dveře, otevřené/zavřené, barva ("řetězec")
/*
class Dvere{
    constructor(barva, otevrena){
        this.otevrena = otevrena
        this.barva = barva
    }
}
*/
// 11.1. Vytvořte třídu Dvere, která v konstruktoru dostane `barva`, `otevrene` (boolean, stav dveří)
class Dvere{
    constructor(barva, otevrena){
        this.otevrena = otevrena
        this.barva = barva
    }
    open(){
        this.otevrena = true
    }
    clos(){
        this.otevrena = false
    }
    get popis (){
        return`Dveře: barva ${this.barva}, stav: ${this.otevrena ? "otevrena" : "zavřené"} `;
    }
}
const dvere = new Dvere ("zelena", true)
//console.log(dvere.popis)

dvere.open()
console.log(dvere.popis)

dvere.clos()
console.log(dvere.popis)

// 11.2. Pridejte metodu otevri(), která nastaví `otevrene`
// 11.3. Pridejte metodu zavri(), která nastaví `otevrene` na false
// 11.4. Pridejte getter popis(), který popiše dveře, jejich barvu a stav


/*
Opakovací úkoly 3 -
v skriptu napojeném na HTML dokument:
Vytvořte proměnnou counter a tlačítko s nápisem "+1" a ID counterAdd

Napojte tlačítko tak, že se po jeho stisknutí zvětší proměnná counter o 1.

Přidejte div s ID counterText. Po stisknutí tlačítka 
a zvětšení proměnné counter vypište její hodnotu jako text do tohoto divu
*/
/*
let counter = 1

const btn = document.querySelector("#counterAdd");
const div = document.querySelector("#counterText")
//div.appendChild(btn)

btn.addEventListener("click", function(event) {
    counter += 1;
    div.textContent = counter
    console.log(counter)
});
*/

// 14. Object/dict + funkce
// 14.1. Vytvoř objekt databazeUzivatelu
//       { 1: { name: "Eva", surname: "Nová" }, 2: { name: "Jirka", surname: "Nový" } }
// 14.2. Vytvoř funkci najdiNejvetsiIdUzivatele()
// 14.3. Vytvoř funkci vytvorUzivatele(jmeno, prijmeni) (adresa = objekt),
//       která přidá záznam do databazeUzivatelu s ID o jedna větším než najdiNejvetsiIdUzivatele()
// 14.4. Vytvoř funkci odstranUzivatele(id), která z databazeUzivatelu odstrani tohoto uzivatele


const databazeUzivatelu = {
    1: {name: "Helena", surname: "Halušková"},
    2: {name: "Lukáš", surname: "Kulička"}
};

/*
najdiNejvetsiIdUzivatele = Object.values(databazeUzivatelu).map(x => x.name + " " + x.surname)
console.log(najdiNejvetsiIdUzivatele)

najdiNejvetsiIdUzivatele2 = []
uzivatel = Object.values(databazeUzivatelu).forEach( x => {
    najdiNejvetsiIdUzivatele2.push(x => x.name + " " + x.surname)
});
console.log(najdiNejvetsiIdUzivatele2)
*/

function najdiNejvetsiIdUzivatele(objekty) {
    let maximum = Number.MIN_VALUE
    const kluce = Object.keys(objekty)
    kluce.forEach(obj => {
        if (obj > maximum) {
            maximum = obj
        }
    });
        return maximum
}
const vysledok = najdiNejvetsiIdUzivatele(databazeUzivatelu);
console.log(vysledok);

function pridatUzivatele(name, surname){
    let uzivatel = {name: name, surname: surname}
    let hledat = najdiNejvetsiIdUzivatele(databazeUzivatelu)
    databazeUzivatelu[parseInt(hledat, 10) +1] = uzivatel
}
console.log(pridatUzivatele("Trouba", "Učitse"))
console.log(databazeUzivatelu)

function odstranUzivateleId(id){
    delete databazeUzivatelu[id]
}

odstranUzivateleId(2)
console.log(databazeUzivatelu)



