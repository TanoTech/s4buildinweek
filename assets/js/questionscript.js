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
        "What is the purpose of a firewall in network security?",
      correct_answer: "Blocking unauthorized access and controlling network traffic",
      incorrect_answers: ["Enhancing internet speedift", "Boosting computer performanceon", "Improving hardware durability"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What does HTML stand for in web development",
      correct_answer: "HyperText Markup Language",
      incorrect_answers: ["High-Tech Machine Learning", "Hardware and Technology Markup Language", "Human Touch Management Logic"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which of the following is a type of cloud service that provides virtualized computing resources over the internet?",
      correct_answer: "IaaS (Infrastructure as a Service)",
      incorrect_answers: ["LAN (Local Area Network)", "WAN (Wide Area Network)", "PaaS (Platform as a Service) Touch Management Logic"]
    },
  ];

let indiceDomandaCorrente = 0 
let risposteUtente = { 
  corrette: [],
  sbagliate: []
}

function randomizzaPosizioneRisposte(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    [array[i], array[j]] = [array[j], array[i]]
  }
}

const mostraDomanda = function () {

    const prendiMain = document.querySelector('main')
  
    const domandaCorrente = questions[indiceDomandaCorrente] 
    const contenitoreDomanda = document.createElement('div')
    contenitoreDomanda.classList.add('contenitoreDomanda')
  
    const testoDomanda = document.createElement('p') 
    testoDomanda.classList.add('testoDomanda')
    testoDomanda.innerHTML = domandaCorrente.question
    contenitoreDomanda.appendChild(testoDomanda) 
    
    const contenitoreRisposte = document.createElement('form')
    contenitoreRisposte.classList.add('contenitoreRisposte') 
  
    for (let i = 0; i < domandaCorrente.incorrect_answers.length; i++) {
        const rispostaSbagliata = domandaCorrente.incorrect_answers[i]
  
        const radioBtnErrata = document.createElement('input')
        radioBtnErrata.type = "radio"
        radioBtnErrata.name = 'risposta'
        radioBtnErrata.value = rispostaSbagliata
  
        const labelSbagliata = document.createElement('label')
        labelSbagliata.innerHTML = rispostaSbagliata

        contenitoreRisposte.appendChild(radioBtnErrata)
        contenitoreRisposte.appendChild(labelSbagliata)
    }

    const rispostaCorretta = domandaCorrente.correct_answer
  
    const radioBtnCorretta = document.createElement('input')
    radioBtnCorretta.type = "radio"
    radioBtnCorretta.name = 'risposta'
    radioBtnCorretta.value = rispostaCorretta 
  
    const labelCorretta = document.createElement('label')
    labelCorretta.innerHTML = rispostaCorretta 

  
    contenitoreRisposte.appendChild(radioBtnCorretta)
    contenitoreRisposte.appendChild(labelCorretta)  
    
    contenitoreDomanda.appendChild(contenitoreRisposte) 
    prendiMain.appendChild(contenitoreDomanda) 

    const tastoProssimaDomanda = document.createElement('button')
    tastoProssimaDomanda.classList.add('tastoProssimaDomanda')
    tastoProssimaDomanda.innerText = 'Next question'
    contenitoreRisposte.appendChild(tastoProssimaDomanda)
    tastoProssimaDomanda.addEventListener('click', passaAllaProssimaDomanda) 

    const indiceDomande = document.createElement('p')
    indiceDomande.classList.add('indiceDomande')
    indiceDomande.innerHTML = `QUESTION ${indiceDomandaCorrente + 1} <span class='slash'>/ 15</span>`
    

    contenitoreDomanda.appendChild(indiceDomande) 

    timerDomanda = setTimeout(function () {
      const prendiMain = document.querySelector('main')
      const rispostaSelezionata = document.querySelector('input[name="risposta"]:checked')
  
      if (rispostaSelezionata) {
        const rispostaUtente = rispostaSelezionata.value
    
        switch (rispostaUtente) {
          case questions[indiceDomandaCorrente].correct_answer:
            risposteUtente.corrette.push({risposta: rispostaUtente })
            break
          default:
            risposteUtente.sbagliate.push({risposta: rispostaUtente })
        }
      
      } else {
        risposteUtente.sbagliate.push({
          risposta: 'risposta vuota'
        })
      }

      prendiMain.removeChild(contenitoreDomanda)
      indiceDomandaCorrente++;
  
      if (indiceDomandaCorrente < questions.length) {
          mostraDomanda()
      } else {
          mostraRisultato()
      }
  },5000)
}

const passaAllaProssimaDomanda = function () {
  const prendiMain = document.querySelector('main')
  
  clearTimeout(timerDomanda)

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


const mostraRisultato = function () {
  const prendiMain = document.querySelector('main')

  const contenitoreTitolo = document.createElement('div')
  contenitoreTitolo.classList.add('contenitoreTitolo')

  const contenitoreRisposteSbagliate = document.createElement('div')
  contenitoreRisposteSbagliate.classList.add('contenitoreRisposteSbagliate')
  const contenitoreRisposteCorrette = document.createElement('div')
  contenitoreRisposteCorrette.classList.add('contenitoreRisposteCorrette')

  const contenitoreRateUs = document.createElement('div')
  contenitoreRateUs.classList.add('contenitoreRateUs')


  const risposteCorretteLunghezza = risposteUtente.corrette.length
  const risposteSbagliateLunghezza = risposteUtente.sbagliate.length
  const totaleDomande = questions.length

  const percentualeCorretteRisposta = parseFloat((risposteCorretteLunghezza / totaleDomande) * 100).toFixed(2)
  const percentualeSbagliateRisposta = parseFloat((risposteSbagliateLunghezza / totaleDomande) * 100).toFixed(2)


  const titolo = document.createElement('h2')
  titolo.textContent = "Result"

  const sottotitolo = document.createElement('p')
  sottotitolo.textContent = "The summary of your answers:"


  const buttonRateUs = document.createElement('button')
  buttonRateUs.textContent = 'RATE US'
  buttonRateUs.classList.add('buttonRateUs')
  buttonRateUs.addEventListener('click', function(){
    window.location.href = 'feedbackpage.html'
  })

  const risposteCorrette = document.createElement('div')
  risposteCorrette.classList.add('risposteCorrette2')
  const correctP = document.createElement('p')
  correctP.textContent = "Correct"
  let percentualeCorrette = document.createElement('p')
  percentualeCorrette.classList.add('percentualeCorrette')
  percentualeCorrette.textContent = `${percentualeCorretteRisposta} %` 
  let indiceCorrette = document.createElement('p')
  indiceCorrette.textContent = `${risposteCorretteLunghezza}/15`

  const risposteSbagliate = document.createElement('div')
  risposteSbagliate.classList.add('risposteSbagliate2')
  const wrongP = document.createElement('p')
  wrongP.textContent = "Wrong"
  let percentualeSbagliate = document.createElement('p')
  percentualeSbagliate.textContent = `${percentualeSbagliateRisposta} %`
  percentualeSbagliate.classList.add('percentualeSbagliate')
  let indiceSbagliate = document.createElement('p')
  indiceSbagliate.textContent = `${risposteSbagliateLunghezza}/15` 



  risposteCorrette.appendChild(correctP)
  risposteCorrette.appendChild(percentualeCorrette)
  risposteCorrette.appendChild(indiceCorrette)

  contenitoreRisposteCorrette.appendChild(risposteCorrette)

  risposteSbagliate.appendChild(wrongP)
  risposteSbagliate.appendChild(percentualeSbagliate)
  risposteSbagliate.appendChild(indiceSbagliate)

  contenitoreRisposteSbagliate.appendChild(risposteSbagliate)

  contenitoreTitolo.appendChild(titolo)
  contenitoreTitolo.appendChild(sottotitolo)
  
  prendiMain.appendChild(contenitoreTitolo)
  prendiMain.appendChild(contenitoreRisposteCorrette)
  prendiMain.appendChild(contenitoreRisposteSbagliate) 
  prendiMain.appendChild(contenitoreRateUs)
  
  contenitoreRateUs.appendChild(buttonRateUs) 
  
}

const semicircles = document.querySelectorAll(".semicircle")
const timer = document.querySelector(".timer")

const hr = 0
const min = 0
const sec = 30

const hours = hr * 3600000
const minutes = min * 60000
const seconds = sec * 1000
const setTime = hours + minutes + seconds
const startTime = Date.now()
const futureTime = startTime + setTime

const timerLoop = setInterval(countDownTimer)
countDownTimer()

function countDownTimer(){
  const currentTime = Date.now()
  const remainingTime = futureTime - currentTime
  const angle = (remainingTime / setTime) * 360

  if(angle > 180){
    semicircles[2].style.display = "none"
    semicircles[0].style.transform = "rotate(180deg)"
    semicircles[1].style.transform = `rotate(${angle}deg)`
  }   else {
    semicircles[2].style.display = "block"
    semicircles[0].style.transform = `rotate(${angle}deg)`
    semicircles[1].style.transform = `rotate(${angle}deg)`
  }




  if(remainingTime < 0) {
    clearInterval(timerLoop)
    semicircles[2].style.display = "none"
    semicircles[0].style.display = "none"
    semicircles[1].style.display = "none"
  }

  const hrs = Math.floor((remainingTime / (1000 * 60 * 60)) % 24).toLocaleString('it-IT', {minimumIntegerDigits: 2, useGrouping:false})
  const mins = Math.floor((remainingTime / (1000 * 60)) % 60).toLocaleString('it-IT', {minimumIntegerDigits: 2, useGrouping:false})
  const secs = Math.floor((remainingTime / 1000) % 60 ).toLocaleString('it-IT', {minimumIntegerDigits: 2, useGrouping:false})

  timer.innerHTML = `
  <div>${secs}</div>
  `

  
  if(remainingTime < 0){
    clearInterval(timerLoop)
    semicircles[0].style.display = "none"
    semicircles[1].style.display = "none"
    semicircles[2].style.display = "none"

   timer.innerHTML = `
    <div></div>
    <div class="colon"></div>
    <div></div>
    <div class="colon"></div>
    <div></div>
    ` 
  }
}




mostraDomanda()

