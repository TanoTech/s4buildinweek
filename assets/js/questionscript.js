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
    
  ];

let indiceDomandaCorrente = 0 /* qui inizializzo l'indice delle domande partendo dalla prima posizione [0] */
let risposteUtente = { /* contenitore risposte*/
  corrette: [],
  sbagliate: []
}

const mostraDomanda = function () {

    const prendiMain = document.querySelector('main')
  
    const domandaCorrente = questions[indiceDomandaCorrente] /* assegno alla costante l'array di domande che è assegnato all'indice */
    const contenitoreDomanda = document.createElement('div')
    contenitoreDomanda.classList.add('contenitoreDomanda') /* questo crea il contenitore per le domande, classe contenitoreDomanda */
  
    const testoDomanda = document.createElement('p') 
    testoDomanda.classList.add('testoDomanda')
    testoDomanda.innerHTML = domandaCorrente.question
    contenitoreDomanda.appendChild(testoDomanda) /* questo crea il testo dentro il contenitore domanda, classe testoDomanda */
    
    const contenitoreRisposte = document.createElement('form')
    contenitoreRisposte.classList.add('contenitoreRisposte') /* questo crea il form dove stanno le risposte, classe contenitoreRisposte */
    
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
         
    } /*questo ciclo for crea le risposte sbagliate ciclando i valori dell'array incorrect_answer dato che vanno da 1 a 3 a seconda della domanda*/

    const rispostaCorretta = domandaCorrente.correct_answer
  
    const radioBtnCorretta = document.createElement('input')
    radioBtnCorretta.type = "radio"
    radioBtnCorretta.name = 'risposta'
    radioBtnCorretta.value = rispostaCorretta 
  
    const labelCorretta = document.createElement('label')
    labelCorretta.innerHTML = rispostaCorretta 
  
    contenitoreRisposte.appendChild(radioBtnCorretta)
    contenitoreRisposte.appendChild(labelCorretta)   /* qui creo la risposta corretta che essendo una sola non ha bisogno di essere ciclata */
    
    contenitoreDomanda.appendChild(contenitoreRisposte) 
    prendiMain.appendChild(contenitoreDomanda) /* il contenitore di risposte lo metto dentro il contenitore di domanda e quest'ultimo lo metto nel main */

    const tastoProssimaDomanda = document.createElement('button')
    tastoProssimaDomanda.classList.add('tastoProssimaDomanda')
    tastoProssimaDomanda.innerText = 'Next question'
    contenitoreRisposte.appendChild(tastoProssimaDomanda)
    tastoProssimaDomanda.addEventListener('click', passaAllaProssimaDomanda) /* qui creo il tasto prossima domandax, classe tastoProssimaDomanda, e gli assegno un evento quando avviene il click che richiama una funzione che ho creato sotto */

    const indiceDomande = document.createElement('p')
    indiceDomande.classList.add('indiceDomande')
    indiceDomande.innerHTML = `QUESTION ${indiceDomandaCorrente + 1} <span class='slash'>/ 10</span>`
    

    contenitoreDomanda.appendChild(indiceDomande) /* qui creo il paragrafo che tiene traccia del numero delle domande, il + 1 è per addattarlo, altrimenti partirebbe da zero */

    timerDomanda = setTimeout(function () {
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

  const risposteCorrette = document.createElement('div')
  risposteCorrette.classList.add('risposteCorrette2')
  const correctP = document.createElement('p')
  correctP.textContent = "Correct"
  let percentualeCorrette = document.createElement('p')
  percentualeCorrette.classList.add('percentualeCorrette')
  percentualeCorrette.textContent = `${percentualeCorretteRisposta} %` 
  let indiceCorrette = document.createElement('p')
  indiceCorrette.textContent = `${Math.ceil(parseInt(percentualeCorretteRisposta) / 10)}/10`; /* qua ho messo un parseInt e un mathceil perchè cosi spuntano solo numeri interi e arrotondati per eccesso, cosi visualizza nel caso le risposta corretta fosse solo 1 il numero intero*/

  const risposteSbagliate = document.createElement('div')
  risposteSbagliate.classList.add('risposteSbagliate2')
  const wrongP = document.createElement('p')
  wrongP.textContent = "Wrong"
  let percentualeSbagliate = document.createElement('p')
  percentualeSbagliate.textContent = `${percentualeSbagliateRisposta} %`
  percentualeSbagliate.classList.add('percentualeSbagliate')
  let indiceSbagliate = document.createElement('p')
  indiceSbagliate.textContent = `${parseInt(percentualeSbagliateRisposta/10)}/10` /*qua ho messo solo parseInt perchè non c'era bisongno di arrotondare
   */



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

mostraDomanda()


