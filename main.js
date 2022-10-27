let parola = prompt("inserisci una parola");

console.log(`Questa è la parola inserita: ${parola}`);


function pailndromo() {
    let parolaInversa = "";

    for (let i = parola.length - 1; i >= 0; i--) {
        parolaInversa += parola[i]; 
    }

    
    console.log(parolaInversa);

    if(parolaInversa == parola){
        console.log("La tua parola è Palindroma");
    }
    else{
        console.log("Non è Palindroma")
    }
}


pailndromo();









