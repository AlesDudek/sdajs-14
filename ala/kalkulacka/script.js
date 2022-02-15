//first number
let a = "";
// secont number
let b = "";
// znak operace
let sing = "";

let konec = false;

const cisla = ["0","1","2","3","4","5","6","7","8","9","."];
const action = ["-","+","X","/"];

// obrazovka
const out = document.querySelector(".calc-screen p ");// vyhledani nuli v obrazovce v <p>0</p>

function clearAll (){
    a = "";
    b = "";
    sing = "";
    konec = false;
    out.textContent = 0;
}

document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
    // nezmáčknutý tlačítka
    if (!event.target.classList.contains("btn"))
        return;
    // výčíštění clearAll ac
    if (event.target.classList.contains("ac"))
        return;

    out.textContent = "";
    const key = event.target.textContent;
    // zmačknutí klavesi 0-9 nebo .
    if(cisla.includes(key)){
        if (b === "" && sing === "") { // pro první číslo které zadám
            a += key;
            console.log(a, b, cisla);
            out.textContent = a;// zobrazení čísel na displei
        }
        else if (a!== "" && b!== "" && konec){//  když přidám dlší početní příklad
            b = key;
            konec = false;
            out.textContent = b;
        }
        else { // druhé číslo zadám
            b += key;
            out.textContent = b;
        }
        console.log(a, b, cisla);
        return;
    }

    //zmačknutí tlačítka +, -, /, X
    // includes => zda pole obsahuje určitou hodnotu mezi svými položkami
    if (action.includes(key)){
        sing = key;
        out.textContent = sing;
        console.log(a, b, cisla);
        return;
    }

    // switch => přepínač (vyhodnotí)
    // break => Příkaz ukončí aktuální smyčku
    // použítí rovnáse =
    if (key === "="){
        if ( b === "") b = a; // když zadám jedno číslo a dám action pak rovnáse bude výsledek
        switch (sing){
            case "+": a = (+a) + (+b);
                break;
            case "-": a = a - b;
                break;
            case "X": a = a * b;
                break;
            case "/":
                if (b === "0") { // upozornění pro nesprávný matematický příklad (5 / 0)
                    out.textContent = "Chyba";
                    a = "";
                    b = "";
                    sing = "";
                    return;
                }
                    a = a / b;
                break;
        }
        konec = true;
        out.textContent = a;
        console.log(a, b, cisla);
    }

}