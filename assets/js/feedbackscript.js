const stelle = document.querySelectorAll(".stellaFeedback");
const stelleSelezionate = []
let ultimaImmagineCasuale = null

for (let i = 0; i < stelle.length; i++) {
    const stella = stelle[i]
    stella.addEventListener("mouseover", function () {
        aumentaLuminosità(i)
    });

    stella.addEventListener("click", function () {
        aggiungiValore(i)
    });
}

function aumentaLuminosità(index) {
    for (let i = 0; i < stelle.length; i++) {
        const stella = stelle[i];
        if (i > index) {
            stella.style.filter = 'brightness(0.1)'
        } else {
            stella.style.filter = 'brightness(1)'
        }
    }
}

function riduciLuminosità() {
    for (let i = 0; i < stelle.length; i++) {
        const stella = stelle[i];
        stella.style.filter = 'brightness(0.1)'
    }
}

function aggiungiValore(index) {
    const valoreStella = index + 1

    if (valoreStella >= 1 && valoreStella <= 10) {
        if (stelleSelezionate.length === 0) {
            stelleSelezionate.push(valoreStella)
        } else {
            stelleSelezionate.shift()
            stelleSelezionate.push(valoreStella)
        }
    }
    console.log(stelleSelezionate)
}

let inputCommenti = document.getElementById("inputCommenti")

function recuperaValoreInput() {
    return inputCommenti.value
}

let bottoneMoreInfo = document.querySelector("button")


const immaginiProfilo = [
    "assets/immagini/tottiPic.jpg",
    "assets/immagini/deRossi.jpeg",
    "assets/immagini/murino.jpeg",
    "assets/immagini/spalletti.jpeg",
    "assets/immagini/spalletti2.jpeg",
    "assets/immagini/zampa.jpeg",
    "assets/immagini/doggo.jpg",
    "assets/immagini/hackerino.jpg",
    "assets/immagini/download.jpeg",
]

bottoneMoreInfo.addEventListener("click", function () {
    if (stelleSelezionate.length > 0) {
        let mainTag = document.querySelector("main")
        let divFeedback = document.createElement("div")
        let divPic = document.createElement("div")
        let profilePic = document.createElement("img")


        let indiceImmagineCasuale;
        do {
            indiceImmagineCasuale = Math.floor(Math.random() * immaginiProfilo.length)
        } while (indiceImmagineCasuale === ultimaImmagineCasuale)

        ultimaImmagineCasuale = indiceImmagineCasuale

        profilePic.src = immaginiProfilo[indiceImmagineCasuale]

        let divCommento = document.createElement("div")
        let paraCommento = document.createElement("p")
        let stelleCommento = document.createElement("img")
        stelleCommento.src = "assets/immagini/star.svg"

        paraCommento.innerText = inputCommenti.value

        for (i = 0; i < stelleSelezionate[0]; i++) {
            divCommento.appendChild(stelleCommento.cloneNode())
        }

        divCommento.appendChild(paraCommento)
        divPic.appendChild(profilePic)
        divFeedback.appendChild(divPic)
        divFeedback.appendChild(divCommento)
        mainTag.appendChild(divFeedback)

        divFeedback.id = "divFeedback"
        divPic.id = "divPic"
        profilePic.id = "profilePic"
        divCommento.id = "divCommento"
        paraCommento.id = "paraCommento"
        stelleCommento.id = "stelleCommento"
    } else {
        bottoneMoreInfo.title = "Please select a rating before leaving your feedback"
    }
})

riduciLuminosità()
