const stelle = document.querySelectorAll(".stellaFeedback") // stelle recuperate con la classe stelle

for (let i = 0; i < stelle.length; i++) {
    const stella = stelle[i]; //definisco stella come un elemento dell'array stelle
    stella.addEventListener("mouseover", function () {
        cambiaLuminosità(i); // ciclo per dare cambiaLuminosità
    })
    stella.addEventListener("mouseout", function () {
        ripristinaLuminosità(); // ciclo for per ripristinare la luminosità 
    });
}
// funzione per ridurre la luminosità delle stelle a destra del mouse
function cambiaLuminosità(index) {
    for (let i = 0; i < stelle.length; i++) {
        const stella = stelle[i];
        if (i > index) {
            stella.style.filter = 'brightness(0.1)';
        } else {
            stella.style.filter = 'brightness(1)';
        }
    }
}
// funzione che ripristina la luminosità iniziale
function ripristinaLuminosità() {
    for (let i = 0; i < stelle.length; i++) {
        const stella = stelle[i];
        stella.style.filter = 'brightness(1)';
    }
}