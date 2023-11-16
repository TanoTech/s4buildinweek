const buttonProceed = document.getElementById("button")
const checkboxPromise = document.getElementById("promise")


function cambiaColoreBottone () {
    if (checkboxPromise.checked) {
        buttonProceed.classList.remove("bottoneDisattivato")
        buttonProceed.classList.add("bottoneAttivato")
    } else {
        buttonProceed.classList.remove("bottoneAttivato")
        buttonProceed.classList.add("bottoneDisattivato")
    }
}

function iniziaTest () {
    buttonProceed.addEventListener("click", function () {
        if (checkboxPromise.checked) {
            window.location.href = "questionpage.html"
        } else {
            alert ("You need to accept our condition to continue!")
        }
    })

}

checkboxPromise.addEventListener("change", cambiaColoreBottone)
cambiaColoreBottone()
iniziaTest()