const stelle = document.querySelectorAll(".stellaFeedback"); // stelle recuperate con la classe stelle
const stelleSelezionate = []; // array per memorizzare le stelle selezionate

// ciclo per aumentare la luminosità delle stelle quando ci passi sopra con il mouse
for (let i = 0; i < stelle.length; i++) {
    const stella = stelle[i]; // definisco stella come un elemento dell'array stelle
    stella.addEventListener("mouseover", function () {
        aumentaLuminosità(i);
    });

    stella.addEventListener("click", function () {
       aggiungiValore(i);
    });
}

// funzione per aumentare la luminosità delle stelle
function aumentaLuminosità(index) {
    for (let i = 0; i < stelle.length; i++) {
        const stella = stelle[i];
        if (i > index) {
            stella.style.filter = 'brightness(0.1)';
        } else {
            stella.style.filter = 'brightness(1)';
        }
    }
}

// funzione che riduce la luminosità delle stelle
function riduciLuminosità() {
    for (let i = 0; i < stelle.length; i++) {
        const stella = stelle[i];
        stella.style.filter = 'brightness(0.1)';
    }
}

function aggiungiValore(index) { /* questa funzione aggiunge il valore della stella all'array stelle selezionate */
    const valoreStella = index + 1
    
    if (valoreStella >= 1 && valoreStella <= 10) {
        if (stelleSelezionate.leng === 0) {
            stelleSelezionate.push(valoreStella)
        } else {
            stelleSelezionate.shift()
            stelleSelezionate.push(valoreStella)
        }    
    }
    console.log(stelleSelezionate)
}
//funzione per nascondere elementi
function nascondiElementi () {
    let elementiDaNascondere = document.querySelectorAll("section")
    for (let i = 0; i < elementiDaNascondere.length; i++){
        elementiDaNascondere[i].style.display = "none";
    }
}
// funzione per recuperare il testo immesso dall'utente 
function recuperaValoreInput() {
    let inputCommenti = document.getElementById("inputCommenti")
    return inputCommenti.value;
}
// funzione che al click del bottone More Info, cancella il contenuto precedente, recupera il commento, crea un paragrafo in cui mostra il valore di apprezzamento inserito dall'utente
let bottoneMoreInfo = document.querySelector("button")
bottoneMoreInfo.addEventListener("click", function(){ 
    nascondiElementi();
    recuperaValoreInput();
    let mainTag = document.querySelector("main"); 
    let divFeedback = document.createElement("div"); // creazione div, contenente p da appendere al main
    let paraFeedback = document.createElement("p");
    divFeedback.id = "divFeedback";
    paraFeedback.id = "testoFeedback";
    divFeedback.appendChild(paraFeedback);
    mainTag.appendChild(divFeedback);
    if (stelleSelezionate.length > 0){
        paraFeedback.innerText = `Thank you for your feedback! Your appreciation is ${stelleSelezionate[0]}!`;
    } else {
    paraFeedback.innerText = `Attention! You have NOT selected any appreciation rating`;
    setTimeout(function(){
        location.reload();
    }, 3500);}
})

riduciLuminosità()
