/**
// 8.1. Máme-li seznam objektů, jak z nich vytáhnout hodnoty z klíče key
// a vytvořit seznam hodnot?
const objs = [{ key: "a" }, { key: "b" }, { key: "c" }, { key: "d" }];
pole = objs.map(x => x.key);
console.log(pole);

pole = [];
objs.forEach(x => {
    pole.push(x.key);
})
console.log(pole);
*/
/*
Varianta 1: máme-li seznam uživatelů [ { name: "Adam", address: { city: "Brno } }, ... ] ,
jak z něj vytvořit seznam měst?
*/

/*
Varianta 2: máme-li objekt uživatelů, kde každý uživatel je označený svým ID 
{ 1: {name: "Adam"}, 2: {name: "Eva"} } , 
jak z objektu vytvořit seznam jmen ["Adam", "Eva?] ?
 */

console.log("___________________Konec 1 zadani_____________________")

const variant1 = [{name: "Adam", address: {city: "Brno"}}, { name1: "Aleš", address1: {city: "Kladno"}}];

console.log(variant1);

const mestaB = console.log(variant1[0])

const mestaK = console.log(variant1[1])
console.log(mestaB)



/*
Opakovací úkoly 3 - v skriptu napojeném na HTML dokument:
Vytvořte proměnnou counter a tlačítko s nápisem "+1" a ID counterAdd

Napojte tlačítko tak, že se po jeho stisknutí zvětší proměnná counter o 1.

Přidejte div s ID counterText. Po stisknutí tlačítka 
a zvětšení proměnné counter vypište její hodnotu jako text do tohoto divu
*/



// 8.1.1.
let pole
const numberObjs = [
    { left: 5, right: 10 },
    { left: 0, right: 0 },
    { left: 8, right: 3 },
];


// 8.1.1.1. Vytáhnout všechny hodnoty pod klíčem `left` => do pole [5, 0, 8]
pole = numberObjs.map(x => x.left);
console.log(pole);
pole = numberObjs.map(x => x.right);
console.log(pole);
// secteni poli
pole = numberObjs.map(x => x.left + x.right);
console.log(pole)

// druha varianta
/*
pole = []
numberObjs.forEach(x =>{
    pole.push(x.left)
})


//Object.keys(numberObjs[0][1][2]) == ["left"]
// 8.1.1.2. Vytáhnout všechny hodnoty pod klíčem `right` => [10, 0, 3]
// 8.1.1.3. Sečíst `left` a `right` => [15, 0, 11]
//_______________________________________________//

// 8.2. Máme-li seznam uživatelů, jak z něj vytvořit seznam měst?
/*
const uziv = [
    { name: "Adam", address: { city: "Brno" } },
    { name: "Eva", address: { city: "Olomouc" } },
];
//const obj = { name: "Adam", address: { city: "Brno" } };
//console.log(obj.address.city);
//const mesta = ["Brno", "Olomouc"];
cesta = uziv.map(a => a.address.city)
console.log(cesta)


mesto = []
uziv.forEach( x =>{
    mesto.push(x.address.city)
    console.log(x)
})
console.log(mesto)
*/
// 8.3. Máme-li objekt uživatelů, kde každý uživatel je označený svým ID,
const uzivObj = {
    1: { name: "Adam", surname: "Ondra" },
    2: { name: "Eva", surname: "Brzobohatá" },
};

znameni = Object.values(uzivObj).map(x => x.name)
console.log(znameni)
znameni = Object.values(uzivObj).map(x => x.surname)
console.log(znameni)
znameni = Object.values(uzivObj).map(x => x.name + " " + x.surname)//
console.log(znameni)

prazdna = []
kdoTo = Object.values(uzivObj).forEach(x => {
    prazdna.push(x.name+ " " + x.surname)
})
console.log(prazdna)

//pole = Object.values(uzivObj).map(x => x);
//pole = Object.values(uzivObj).forEach(x => x);

// 8.3.1 Jak z objektu vytvořit seznam křestních jmen? => ["Adam", "Eva"]
// 8.3.2 Jak z objektu vytvořit seznam přijmení? => ["Ondra", "Brzobohatá"]
// 8.3.3 Jak z objektu vytvořit seznam celých jmen?
//        => ["Adam Ondra", "Eva Brzobohatá"]
//___________________________________________________________________//

// 9. Funkce, listy, objekty
//   {name: "A", surname: "B"} => "A B"
// 9.1 Vytvořte funkci, která z objektu uživatele vrátí jeho celé jméno
// 9.2 Vytvořte funkci, která ze seznamu uživatelů vrátí jejich celá jména
// 9.3 Vytvořte funkci, která z objektu id:uživatel vrátí celá jména
// 9.4 Bonus: Vytvořte funkci, která z objektu id:uživatel vrátí objekt id:"celé jméno"
//{} => objekt
//[] => pole

// 9.1
let portFolio = { name: "Aleš", surname: "Dudek"}

function celeJmeno(obj){
    
    return obj.name + " " + obj.surname
}
console.log(celeJmeno(portFolio))
// 9.2
let lidi =[
    { name: "Aleš", surname: "Dudek"},
    { name: "Lenka", surname: "Pour"}
]

function celeJmeno2(pole){
    
    return pole.map(x => x.name + " " + x.surname)
}
console.log(celeJmeno2(lidi))

// 9.3
let moralka ={
    1: { name: "Aleš", surname: "Soudek"},
    2: { name: "Kulička", surname: "Pour"},
}

function vypisCele(obj){

    return Object.values(obj).map( x => x.name + " " + x.surname)
}

console.log(vypisCele(moralka))

//9.4

