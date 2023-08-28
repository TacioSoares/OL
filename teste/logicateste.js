let perguntas = document.querySelectorAll('.perguntas') // Pega no HTML os campos de questao
const botaoResposta = document.querySelectorAll ('.chamaResposta')

function inserePerguntas() {
    perguntas[0].getElementsByTagName('h4')[0].innerText += questoes.multipla.q1.pergunta 

    perguntas[0].querySelectorAll('li').forEach(completarAlternativas)
}





//console.log(questoes.multipla.q1.alternativas[0])

function completarAlternativas(li, indice) {
    alternativa = organizarQuestao(li, indice)
    alternativa.innerHTML += questoes.multipla.q1.alternativas[indice]
}

function organizarQuestao(li, indice) {
    return li.querySelectorAll('label')[0]
}

inserePerguntas()

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