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


