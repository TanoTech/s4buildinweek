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
  ];

  window.onload = function () {

  }
  

let indiceDomandaCorrente = 0 /* qui inizializzo l'indice delle domande partendo dalla prima posizione [0] */

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
        prendiMain.removeChild(contenitoreDomanda)
        indiceDomandaCorrente++
        mostraDomanda()
    }, 30000)    /* qua creo il timer che ogni 30 secondi a prescindere dalla risposta data o meno passa alla domanda successiva, questo è passaggio è molto importante perchè questa funzione setTimeout prima di tutto rimuove il contenitore domanda svuotando quindi completamente la pagina da tutti nostri elementi, dopo di che l'indiceDomandaCorrente con l'incremento '++' si sposta alla posizione successiva dell'array questions e richiamando la funzione ricrea di nuovo un gioioso loop fino ad esaurimento scorte  (͡• ͜ʖ ͡•)  */
}

const passaAllaProssimaDomanda = function () {
    const prendiMain = document.querySelector('main')
    
    clearTimeout(timerDomanda)

    prendiMain.removeChild(prendiMain.lastChild)
    indiceDomandaCorrente++
    mostraDomanda()
} /* questa è la funzione associata al click dell'evento del tastoProssimaDomanda, ricreo la constante prendiMain perchè essendo dentro la funzione  mostraDomanda ha uno scope locale e non può essere richiamata fuori, comunque*/


  
mostraDomanda()