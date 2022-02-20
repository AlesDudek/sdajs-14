// 18.0. Vytvoř funkci o jednom argumentu, která vrací pole, které bude argument obsahovat dvakrát ([x, x]), zavolej ji.
function dvakratDoPole(x) {
    return [x, x];
}
console.log(dvakratDoPole([1, 2, 3]));

// 18.1. Vytvoř funkci bez argumentů, která vrátí funkci jinou, vnořenou, která vypíše "5".
//       ( = v tělě funkce vytvoř funkci a vrať ji).
//       Zavolej ji, ulož si výsledek a zavolej tento výsledek.
function vnorenaFunkce() {
    function vypisPet() {
        console.log("z vnorene funkce");
    }
    return vypisPet;

    // return () => { console.log("vnorena") };
}
vysledek = vnorenaFunkce();
vysledek();
console.log(vysledek);

// 18.2. Vytvoř funkci s jedním argumentem. Typ argumentu bude funkce, kterou v těle zavolej.
//       Zavolej vytvořenou funkci s libovolnou funkcí.
function dostanuFunkci(funkce) {
    console.log("před voláním");
    funkce();
    console.log("po volání");
}
dostanuFunkci(() => {
    console.log("predavana funkce");
})