const tooltip = document.getElementById("tooltip2")
        const stelle = document.querySelectorAll(".stellaFeedback")
        const stelleSelezionate = []
        let ultimaImmagineCasuale = null
        let immaginiProfilo = [
            "assets/immagini/tottiPic.jpg",
            "assets/immagini/deRossi.jpeg",
            "assets/immagini/murino.jpeg",
            "assets/immagini/spalletti.jpeg",
            "assets/immagini/spalletti2.jpeg",
            "assets/immagini/zampa.jpeg",
            "assets/immagini/doggo.jpg",
            "assets/immagini/hackerino.jpg",
            "assets/immagini/download.jpeg",
        ];
        let immaginiDisponibili = [...immaginiProfilo]

        riduciLuminosità()

        for (let i = 0; i < stelle.length; i++) {
            const stella = stelle[i]

            stella.addEventListener("mouseover", function () {
                aumentaLuminosità(i)
            });

            stella.addEventListener("mouseout", function () {
                if (stelleSelezionate.indexOf(i + 1) === -1) {
                    riduciLuminosità()
                }
            });

            stella.addEventListener("click", function () {
                aggiungiValore(i)
                aumentaLuminosità(i)
            });
        }

        let inputCommenti = document.getElementById("inputCommenti");

        function recuperaValoreInput() {
            return inputCommenti.value
        }

        let bottoneMoreInfo = document.querySelector("button");

        bottoneMoreInfo.addEventListener("click", function () {
            if (stelleSelezionate.length > 0 && immaginiDisponibili.length > 0) {
                let mainTag = document.querySelector("main")
                let divFeedback = document.createElement("div")
                let divPic = document.createElement("div")
                let profilePic = document.createElement("img")

                let indiceImmagineCasuale;
                if (immaginiDisponibili.length > 0) {
                    indiceImmagineCasuale = Math.floor(Math.random() * immaginiDisponibili.length)
                    ultimaImmagineCasuale = immaginiDisponibili[indiceImmagineCasuale]
                    immaginiDisponibili.splice(indiceImmagineCasuale, 1)
                }

                profilePic.src = ultimaImmagineCasuale

                let divCommento = document.createElement("div")
                let paraCommento = document.createElement("p")
                let stelleCommento = document.createElement("img")
                stelleCommento.src = "assets/immagini/star.svg"

                paraCommento.innerText = recuperaValoreInput()

                for (let i = 0; i < stelleSelezionate[0]; i++) {
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
                tooltip.style.display = "none"
            } else {
                tooltip.style.display = "block"
            }
        });

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
                const stella = stelle[i]
                stella.style.filter = 'brightness(0.1)'
            }
        }

        function aggiungiValore(index) {
            const valoreStella = index + 1

            if (valoreStella >= 1 && valoreStella <= 10) {
                if (stelleSelezionate.length === 0) {
                    stelleSelezionate.push(valoreStella)
                } else {
                    stelleSelezionate.shift();
                    stelleSelezionate.push(valoreStella)
                }
            }
            console.log(stelleSelezionate)
        }