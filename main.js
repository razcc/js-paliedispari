// ^PALINDROMO

// let parola = prompt("inserisci una parola");

// console.log(`Questa è la parola inserita: ${parola}`);


// function pailndromo() {
//     let parolaInversa = "";

//     for (let i = parola.length - 1; i >= 0; i--) {
//         parolaInversa += parola[i]; 
//     }


//     console.log(parolaInversa);

//     if(parolaInversa == parola){
//         console.log("La tua parola è Palindroma");
//     }
//     else{
//         console.log("Non è Palindroma")
//     }
// }

// pailndromo();

// ^--------------PARI E DISPARI-------------------

let pari = "pari";
let dispari = "dispari";

let sceltaUtente = prompt("Scegli: pari o dispari, scrivendo la parola tutta in minuscolo");
console.log(`L'utente scelglie: ${sceltaUtente}`);

if (sceltaUtente == pari || sceltaUtente == dispari) {
    // Funzione genera numeri Computer
    function numeroRandomComputer() {

        let numeroComputer = Math.floor((Math.random() * 5) + 1);
        console.log(`Il cmputer gioca: ${numeroComputer}`)
        return numeroComputer;
    }


    // Funzione per stabilire un numero pari o dispari
    function numeroPariNumeroDispari(numero) {

        if (numero % 2 == 0) {
            let sceltaVincente = pari;
            console.log(`La somma di questi due numeri è: ${sceltaVincente}`);
            return sceltaVincente;
        }
        else {
            let sceltaVincente = dispari;
            console.log(`La somma di questi due numeri è: ${sceltaVincente}`);
            return sceltaVincente;

        }
    }


    let numeroUtente = parseInt(prompt("Inserisci il tuo numero compreso fra 1 e 5:"));
    console.log(`Il numero scelto dall'utente è : ${numeroUtente}`)
    let somma = 0;


    somma = numeroUtente + numeroRandomComputer();
    console.log(`La somma dei due numeri è: ${somma}`);


    if ( numeroPariNumeroDispari(somma) == sceltaUtente){
        console.log("Ha vitno Utente");
    }
    else{
        console.log("Ha vinto in PC");
    }
    
}
else {
    console.log("Inserisci pari o dispari corettamente");
}






