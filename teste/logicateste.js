let perguntas = document.querySelectorAll('.perguntas') // Pega no HTML os campos de questao
const botaoResposta = document.querySelectorAll ('.chamaResposta')



console.log(perguntas.length)


function insereQuestao() {

    let numeroQuestao = procuraQuestaoNova()

    numeroQuestao.forEach(numero => {
        InsereAPergunta(numero)
        // InsereAlternativas(numero)
    })


    function InsereAPergunta(numero) {
        let i = 0
        while (i < perguntas.length) {
            // Inserindo perguntas do banco na página
            perguntas[i].querySelector('h4').innerHTML = Object.entries(questoes.multipla[numero].pergunta)

            // Inserindo respostas do banco na página
            console.log(perguntas[i].querySelector('li'))
            i++
        }
        /* campoPergunta.innerHTML = Object.entries(questoes.multipla[numero].pergunta) */
    }

    //console.log()

    perguntas[0].querySelectorAll('li').forEach(completarAlternativas)
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

function completarAlternativas(li, indice) {
    alternativa = organizarQuestao(li, indice)
    alternativa.innerHTML += questoes.multipla.q1.alternativas[indice]
}

function organizarQuestao(li, indice) {
    return li.querySelectorAll('label')[0]
}

insereQuestao()

botaoResposta.forEach(botao => {
    botao.addEventListener('click', confereResposta)
});

function mensagem(feedback, botao) {
    if(feedback) {
        botao.parentNode.innerHTML = `<p>Resposta Correta`
    } else {
        botao.parentNode.innerHTML = `<p>Resposta Incorreta! <br><br></P
        <p>A resposta certa é:<br><br></p>
        <p>${questoes.multipla.q1.resposta}</p>`
    }
}

function confereResposta(event) {
    let botao = event.target
    let inputs = event.target.parentNode.parentNode.querySelectorAll('input')
    let erro = 0
    inputs.forEach(input => {
        if(input.checked) {
            if(questoes.multipla.q1.responder((input.nextElementSibling.innerText))) {
                return mensagem(true, botao)
            } else {
                return mensagem(false, botao)
            }
        } else {
            erro += 1
        }
    })

}

// input.nextElementSibling