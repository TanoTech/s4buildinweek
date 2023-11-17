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

// funzione per recuperare il testo immesso dall'utente 
let inputCommenti = document.getElementById("inputCommenti")
function recuperaValoreInput() {
    return inputCommenti.value;
}
// funzione che al click del bottone More Info, cancella il contenuto precedente, recupera il commento, crea un paragrafo in cui mostra il valore di apprezzamento inserito dall'utente
let bottoneMoreInfo = document.querySelector("button")

bottoneMoreInfo.addEventListener("click", function () {
    if (stelleSelezionate.length > 0 && inputCommenti.value.trim() !=="") {
        let mainTag = document.querySelector("main");
        let divFeedback = document.createElement("div"); //div principale
        let divPic = document.createElement("div"); // div con profile pic
        let profilePic = document.createElement("img"); // immagine profilo
        profilePic.src = "assets/immagini/tottiPic.jpg"
        let divCommento = document.createElement("div"); // div con il commento
        let paraCommento = document.createElement("p");
        let stelleCommento = document.createElement("img"); // immagine stelline
        stelleCommento.src = "assets/immagini/star.svg";
        //divCommento.id = "";
        //paraCommento.id = "";
        //stelleFeedback.id = "";
        paraCommento.innerText = inputCommenti.value; // inserisci il testo nel commento
        for (i=0; i < stelleSelezionate[0]; i++) {
            divCommento.appendChild(stelleCommento.cloneNode()); // ciclo per appendere piu stelle
        };
        divCommento.appendChild(paraCommento); // appendo il paragrafo al divCommento
        divPic.appendChild(profilePic); // appendo la foto al il DivPic
        divFeedback.appendChild(divPic); // appendo i 2 div interni al divFeedback
        divFeedback.appendChild(divCommento);
        mainTag.appendChild(divFeedback); // appendo finalmente il tutto al main
        // assegnazione ID ai vari elementi per formattarli in css
        divFeedback.id = "divFeedback";
        divPic.id = "divPic";
        profilePic = "profilePic";
        divCommento.id = "divCommento";
        paraCommento.id = "paraCommento";
        stelleCommento.id ="stelleCommento";
    } else {
        alert("non funza")
    }
})

riduciLuminosità()