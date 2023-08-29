const perguntas = document.querySelectorAll('.perguntas') // Pega no HTML os campos de questao
var ordemDasQuestoes = []

/* console.log(Object.entries(questoes.multipla)[2][1].alternativas[0]) */

function insereQuestao() {
    let numeroQuestao = procuraQuestaoNova()

    inserePerguntaEAlternativas(numeroQuestao)
    //console.log()

    /* perguntas[0].querySelectorAll('li').forEach(completarAlternativas) */
}

function inserePerguntaEAlternativas(arrayIndices) {
    let i = 0
    while (i < arrayIndices.length) {
        // Inserindo perguntas do banco na página
        let questaoDaVez = Object.entries(questoes.multipla)[arrayIndices[i]][1]
        ordemDasQuestoes.push(questaoDaVez)
        perguntas[i].querySelector('h4').innerHTML = questaoDaVez.pergunta
        // Inserindo alternativas na pergunta

        let labels = perguntas[i].querySelectorAll('label')
        let c = 0
        labels.forEach(label => {
            label.innerHTML = questaoDaVez.alternativas[c]
            c++
        })
        /* perguntas[i].querySelectorAll('label').innerHTML = Object.entries(questoes.multipla)[arrayIndices[i]][1].pergunta */

        i++
    }
}

function completaAlternativas(label, indice) {
    //console.log(label)
    Object.entries(questoes.multipla)[arrayIndices[i]][1].pergunta
}

// console.log(Object.keys(questoes.multipla).length)
// console.log(procuraQuestaoNova())


function procuraQuestaoNova() {
    let questaoSorteada = []
    while (questaoSorteada.length < perguntas.length) {
        var numero = Math.floor(Math.random() * (perguntas.length))
        if (questaoSorteada.indexOf(numero) == -1) {
            questaoSorteada.push(numero)
        }
    }
    return questaoSorteada
}

//console.log(questoes.multipla.q1.alternativas[0])

/* function completarAlternativas(li, indice) {
    alternativa = organizarQuestao(li, indice)
    alternativa.innerHTML += questoes.multipla.q1.alternativas[indice]
}

function organizarQuestao(li, indice) {
    return li.querySelectorAll('label')[0]
} */

insereQuestao()
