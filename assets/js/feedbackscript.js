const stelle = document.querySelectorAll(".stellaFeedback") // stelle recuperate con la classe stelle

// ciclo per aumentare la luminosità delle stelle quando ci passi sopra con il mouse
for (let i = 0; i < stelle.length; i++) {
    const stella = stelle[i]; //definisco stella come un elemento dell'array stelle
    stella.addEventListener("mouseover", function () {
        aumentaLuminosità(i);
    })
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
riduciLuminosità()