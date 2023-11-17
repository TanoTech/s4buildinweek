const buttonProceed = document.getElementById("button")
const checkboxPromise = document.getElementById("promise")
const tooltip = document.getElementById("tooltip")

function cambiaColoreBottone() {
    if (checkboxPromise.checked) {
        buttonProceed.classList.remove("bottoneDisattivato")
        buttonProceed.classList.add("bottoneAttivato")
        tooltip.style.display = "none"
    } else {
        buttonProceed.classList.remove("bottoneAttivato")
        buttonProceed.classList.add("bottoneDisattivato")
    }
}

function iniziaTest() {
    buttonProceed.addEventListener("click", function () {
        if (!checkboxPromise.checked) {
            mostraTooltip();
        } else {
            window.location.href = "questionpage.html"
        }
    });
}

function mostraTooltip() {
    if (!checkboxPromise.checked) {
        tooltip.style.display = "block"
    }
}

checkboxPromise.addEventListener("change", cambiaColoreBottone)
cambiaColoreBottone()
iniziaTest()