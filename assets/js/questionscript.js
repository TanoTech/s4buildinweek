const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What does VPN stand for?",
    correct_answer: "Virtual Private Network",
    incorrect_answers: ["Very Powerful Network", "Visual Processing Node", "Voice Protocol Network"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What programming language is commonly used for developing Android applications?",
    correct_answer: "Javas",
    incorrect_answers: ["Swift", "Python", "C"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the name of the device that allows you to access the internet, send emails, and play games?",
    correct_answer: "Computer",
    incorrect_answers: ["Television", "Refrigerator", "Microwave"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What does SSL/TLS secure in online communication?",
    correct_answer: "Websites",
    incorrect_answers: ["File transfers", "Database queries", " Email"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following is a version control system used by software developers?",
    correct_answer: "SVN",
    incorrect_answers: ["PHP", "XML", "HTML"]
  },
];

let indiceDomandaCorrente = 0
let risposteUtente = {
  corrette: [],
  sbagliate: []
}

let rispostaSelezionata
let isQuizActive = true

const handleBeforeUnload = function (event) {
  if (isQuizActive && indiceDomandaCorrente >= -1) {
    const message = "If you leave this page your exam will be failed"
    event.returnValue = message
    return message
  }
}

window.addEventListener("beforeunload", handleBeforeUnload)

/*cicla l'array question dando domande e le risposte in modo random creando tutta la struttura html*/
const mostraDomanda = function () {
  const prendiMain = document.querySelector('main')

  timerDomandeProva()

  /* domande e risposte */
  const domandaCorrente = questions[indiceDomandaCorrente]
  const contenitoreDomanda = document.createElement('div')
  contenitoreDomanda.classList.add('contenitoreDomanda')

  const testoDomanda = document.createElement('p')
  testoDomanda.classList.add('testoDomanda')
  testoDomanda.innerHTML = domandaCorrente.question
  contenitoreDomanda.appendChild(testoDomanda)

  const contenitoreRisposte = document.createElement('form')
  contenitoreRisposte.classList.add('contenitoreRisposte')

  /* mescola risposte  */
  const risposteMescolate = [...domandaCorrente.incorrect_answers, domandaCorrente.correct_answer]
  risposteMescolate.sort(() => Math.random() - 0.5)

  for (let i = 0; i < risposteMescolate.length; i++) {
    const risposta = risposteMescolate[i]

    const radioBtn = document.createElement('input')
    radioBtn.type = 'radio'
    radioBtn.name = 'risposta'
    radioBtn.value = risposta
    radioBtn.id = `risposta_${i}`
    radioBtn.style.display = 'none'

    const spanLabel = document.createElement('span')
    spanLabel.classList.add('label-text')
    spanLabel.innerHTML = risposta;

    const label = document.createElement('label')
    label.classList.add('testoRisposta')
    label.setAttribute('for', `risposta_${i}`)
    label.appendChild(radioBtn)
    label.appendChild(spanLabel)
    contenitoreRisposte.appendChild(label)
    label.addEventListener('click', function () {
      if (rispostaSelezionata) {
        rispostaSelezionata.classList.remove('clicked')
      } label.classList.add('clicked');
      rispostaSelezionata = label
    })
  }

  contenitoreDomanda.appendChild(contenitoreRisposte)
  prendiMain.appendChild(contenitoreDomanda)

  /* Tasto domanda e indice domande */
  const tastoProssimaDomanda = document.createElement('button')
  tastoProssimaDomanda.classList.add('tastoProssimaDomanda')
  tastoProssimaDomanda.innerText = 'Next question'
  contenitoreRisposte.appendChild(tastoProssimaDomanda)
  tastoProssimaDomanda.addEventListener('click', passaAllaProssimaDomanda)

  const indiceDomande = document.createElement('p')
  indiceDomande.classList.add('indiceDomande')
  indiceDomande.innerHTML = `QUESTION ${indiceDomandaCorrente + 1} <span class='slash'>/ 15</span>`

  contenitoreDomanda.appendChild(indiceDomande)

  /* Tempo di 30 secondi per ogni domanda, manda risultati risposta, cicla array questions */
  timerDomanda = setTimeout(function () {
    const prendiMain = document.querySelector('main')
    const rispostaSelezionata = document.querySelector('input[name="risposta"]:checked')

    if (rispostaSelezionata) {
      const rispostaUtente = rispostaSelezionata.value

      switch (rispostaUtente) {
        case domandaCorrente.correct_answer:
          risposteUtente.corrette.push({ risposta: rispostaUtente })
          break
        default:
          risposteUtente.sbagliate.push({ risposta: rispostaUtente })
      }

    } else {
      risposteUtente.sbagliate.push({
        risposta: 'risposta vuota'
      })
    }

    prendiMain.removeChild(contenitoreDomanda)
    indiceDomandaCorrente++

    if (indiceDomandaCorrente < questions.length) {
      mostraDomanda()
    } else {
      mostraRisultato()
    }
  }, 30000)
}

/* tasto nuova domanda stesse funzioni del timer ma deciso dall'input utente */
const passaAllaProssimaDomanda = function () {
  const prendiMain = document.querySelector('main')

  const rispostaSelezionata = document.querySelector('input[name="risposta"]:checked')

  if (rispostaSelezionata) {
    const rispostaUtente = rispostaSelezionata.value

    switch (rispostaUtente) {
      case questions[indiceDomandaCorrente].correct_answer:
        risposteUtente.corrette.push({ risposta: rispostaUtente })
        break;
      default:
        risposteUtente.sbagliate.push({ risposta: rispostaUtente })
    }

  } else {
    risposteUtente.sbagliate.push({
      risposta: 'risposta vuota'
    })
  }

  prendiMain.removeChild(prendiMain.lastChild)
  indiceDomandaCorrente++

  if (indiceDomandaCorrente < questions.length) {
    mostraDomanda()
  } else {
    mostraRisultato()
  }
}

/*finito l'array question viene chiamato da mostra domanda per i risultati del quiz e crea tutta la struttura html*/
const mostraRisultato = function () {

  window.removeEventListener("beforeunload", handleBeforeUnload);

  nascondiTimer()

  const prendiMain = document.querySelector('main')

  const contenitoreTitolo = document.createElement('div')
  contenitoreTitolo.classList.add('contenitoreTitolo')

  const contenitoreRisposteSbagliate = document.createElement('div')
  contenitoreRisposteSbagliate.classList.add('contenitoreRisposteSbagliate')
  const contenitoreRisposteCorrette = document.createElement('div')
  contenitoreRisposteCorrette.classList.add('contenitoreRisposteCorrette')

  const contenitoreRateUs = document.createElement('div')
  contenitoreRateUs.classList.add('contenitoreRateUs')


  const totaleDomande = questions.length
  const risposteCorretteLunghezza = risposteUtente.corrette.length
  const risposteSbagliateLunghezza = totaleDomande - risposteCorretteLunghezza

  const percentualeCorretteRisposta = parseInt((risposteCorretteLunghezza / totaleDomande) * 100)
  const percentualeSbagliateRisposta = (100 - parseInt(percentualeCorretteRisposta))

  const titolo = document.createElement('h2')
  titolo.textContent = "Results"

  const sottotitolo = document.createElement('p')
  sottotitolo.textContent = "The summary of your answers:"


  const buttonRateUs = document.createElement('button')
  buttonRateUs.textContent = 'RATE US'
  buttonRateUs.classList.add('buttonRateUs')
  buttonRateUs.addEventListener('click', function () {
    window.location.href = 'feedbackpage.html'
  })

  const risposteCorrette = document.createElement('div')
  risposteCorrette.classList.add('risposteCorrette2')
  const correctP = document.createElement('p')
  correctP.textContent = "Correct"
  let percentualeCorrette = document.createElement('p')
  percentualeCorrette.classList.add('percentualeCorrette')
  percentualeCorrette.textContent = `${percentualeCorretteRisposta}%`
  let indiceCorrette = document.createElement('p')
  indiceCorrette.textContent = `${risposteCorretteLunghezza}/15 questions`

  const risultatoEsame = document.createElement('div')
  const risultatoEsameTesto = document.createElement('div')
  risultatoEsameTesto.classList.add('risutaltoEsameTesto')
  risultatoEsame.classList.add('risultatoEsame')
  const risultatoEsameProgresso = document.createElement('div')
  risultatoEsameProgresso.classList.add('risultatoEsameProgresso')
  const risultatoEsameProgressoValore = document.createElement('div')
  risultatoEsameProgressoValore.classList.add('risultatoEsameProgressoValore')
  const testoRisultatoEsame = document.createElement('h3')
  testoRisultatoEsame.classList.add('testoRisultatoEsame')

  const sottotitoloRisultatoEsame = document.createElement('p')
  sottotitoloRisultatoEsame.classList.add('sottotitoloRisultatoEsame')
  const messaggioEmail = document.createElement('p')
  messaggioEmail.classList.add('messaggioEmail')

  if (percentualeCorretteRisposta >= 60) {
    testoRisultatoEsame.textContent = 'Congratulations!'
    sottotitoloRisultatoEsame.textContent = 'You passed the exam'
    messaggioEmail.textContent = "We'll send you the certificate in few minutes. Check your email (including promotions / spam folder"
  } else {
    testoRisultatoEsame.textContent = 'Failed!'
    sottotitoloRisultatoEsame.textContent = 'You did not pass the exam.'
  }

  const risposteSbagliate = document.createElement('div')
  risposteSbagliate.classList.add('risposteSbagliate2')
  const wrongP = document.createElement('p')
  wrongP.textContent = "Wrong"
  let percentualeSbagliate = document.createElement('p')
  percentualeSbagliate.textContent = `${percentualeSbagliateRisposta}%`
  percentualeSbagliate.classList.add('percentualeSbagliate')
  let indiceSbagliate = document.createElement('p')
  indiceSbagliate.textContent = `${risposteSbagliateLunghezza}/15 questions`

  const boxRisposteRisultati = document.createElement('div')
  boxRisposteRisultati.classList.add('boxRisposteRisultati')

  risposteCorrette.appendChild(correctP)
  risposteCorrette.appendChild(percentualeCorrette)
  risposteCorrette.appendChild(indiceCorrette)

  contenitoreRisposteCorrette.appendChild(risposteCorrette)

  risultatoEsame.appendChild(risultatoEsameProgresso)
  risultatoEsameProgresso.appendChild(risultatoEsameProgressoValore)
  risultatoEsameProgressoValore.appendChild(risultatoEsameTesto)

  risultatoEsameTesto.appendChild(testoRisultatoEsame)
  risultatoEsameTesto.appendChild(sottotitoloRisultatoEsame)
  risultatoEsameTesto.appendChild(messaggioEmail)

  risposteSbagliate.appendChild(wrongP)
  risposteSbagliate.appendChild(percentualeSbagliate)
  risposteSbagliate.appendChild(indiceSbagliate)
  contenitoreRisposteSbagliate.appendChild(risposteSbagliate)


  contenitoreTitolo.appendChild(titolo)
  contenitoreTitolo.appendChild(sottotitolo)

  boxRisposteRisultati.appendChild(contenitoreRisposteCorrette)
  boxRisposteRisultati.appendChild(risultatoEsame)
  boxRisposteRisultati.appendChild(contenitoreRisposteSbagliate)

  prendiMain.appendChild(contenitoreTitolo)
  prendiMain.appendChild(boxRisposteRisultati)
  prendiMain.appendChild(contenitoreRateUs)

  contenitoreRateUs.appendChild(buttonRateUs)

  /* crea il grafico a torta legato alla percentuale delle risposte date */
  let progressoValore = 0
  let progressoValoreFinale = parseInt(percentualeSbagliateRisposta)
  let velocitàProgresso = 20

  let progress = setInterval(() => {
    progressoValore++
    risultatoEsameProgresso.style.background = `conic-gradient(
      #B22B8A ${progressoValore * 3.6}deg,
      #75FBFD ${progressoValore * 3.6}deg)`

    if (progressoValore === progressoValoreFinale) {
      clearInterval(progress)
    }

  }, velocitàProgresso)
}

const timerDomandeProva = function () {
  const prendiHeader = document.querySelector('header')

  const cerchioTimerEsistente = document.querySelector('.cerchioTimer')
  if (cerchioTimerEsistente) {
    prendiHeader.removeChild(cerchioTimerEsistente)
  }

  const cerchioTimer = document.createElement('div')
  cerchioTimer.classList.add('cerchioTimer')

  const cerchioTimerProgresso = document.createElement('div')
  cerchioTimerProgresso.classList.add('cerchioTimerProgresso')

  const testoTimer = document.createElement('div')
  testoTimer.classList.add('testoTimer')

  const timerSecondi = document.createElement('p')
  timerSecondi.textContent = "SECONDS"
  timerSecondi.classList.add('paragrafoSecondi')

  const numeroSecondi = document.createElement('p')
  numeroSecondi.textContent = " 0 "
  numeroSecondi.classList.add('numeroSecondi')

  const secondiRimanenti = document.createElement('p')
  secondiRimanenti.textContent = "REMAINING"
  secondiRimanenti.classList.add('paragrafoSecondi')

  testoTimer.appendChild(timerSecondi)
  testoTimer.appendChild(numeroSecondi)
  testoTimer.appendChild(secondiRimanenti)

  cerchioTimerProgresso.appendChild(testoTimer)

  cerchioTimer.appendChild(cerchioTimerProgresso)

  prendiHeader.appendChild(cerchioTimer)

  const progressBar = document.querySelector('.cerchioTimerProgresso')
  const valueContainer = document.querySelector('.numeroSecondi')

  let progressValue = 30
  const progressEndValue = 0
  const duration = 30000
  const interval = 100

  const steps = duration / interval
  const step = 360 / steps
  let currentStep = 0

  updateProgressBar()

  const startTime = Date.now()

  const progress = setInterval(() => {
    const elapsedTime = Date.now() - startTime
    progressValue = Math.max(0, 30 - Math.floor(elapsedTime / 1000))

    updateProgressBar()

    if (progressValue === progressEndValue) {
      clearInterval(progress)
    }
  }, interval);

  function updateProgressBar() {
    const formattedValue = progressValue < 10 ? `0${progressValue}` : `${progressValue}`
    valueContainer.textContent = formattedValue
    progressBar.style.background = `conic-gradient(
      transparent ${currentStep}deg,
      #75FBFD ${currentStep - step}deg)`
    currentStep += step
  }
};

const nascondiTimer = function () {
  const prendiTimer = document.querySelector('.cerchioTimer')
  prendiTimer.style.display = 'none'
}

mostraDomanda()