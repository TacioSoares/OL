let perguntas = document.querySelectorAll('.perguntas') // Pega no HTML os campos de questao
const botaoResposta = document.querySelectorAll ('.chamaResposta')

const quantidadeDeQuestoes = Object.keys(questoes.multipla)
console.log(quantidadeDeQuestoes)

criarQuestoesNoHTML()

function criarQuestoesNoHTML() {
    quantidadeDeQuestoes.forEach(numero => {
        console.log(numero)
        criarTags(numero)
    })
}

function criarTags(numero) {
    var tagsQuestao = []
    tagsQuestao.push(document.createElement('div'))
    tagsQuestao.push(document.createElement('span'))
    tagsQuestao.push(document.createElement('div'))
    tagsQuestao.push(document.createElement('h4'))
    tagsQuestao.push(document.createElement('div'))
    tagsQuestao.push(document.createElement('ul'))
    tagsQuestao.push(document.createElement('li'))
    tagsQuestao.push(document.createElement('input'))
    tagsQuestao.push(document.createElement('label'))
    tagsQuestao.push(document.createElement('hr'))
    tagsQuestao.push(document.createElement('li'))
    tagsQuestao.push(document.createElement('input'))
    tagsQuestao.push(document.createElement('label'))
    tagsQuestao.push(document.createElement('hr'))
    tagsQuestao.push(document.createElement('li'))
    tagsQuestao.push(document.createElement('input'))
    tagsQuestao.push(document.createElement('label'))
    tagsQuestao.push(document.createElement('hr'))
    tagsQuestao.push(document.createElement('li'))
    tagsQuestao.push(document.createElement('input'))
    tagsQuestao.push(document.createElement('label'))
    tagsQuestao.push(document.createElement('hr'))
    tagsQuestao.push(document.createElement('li'))
    tagsQuestao.push(document.createElement('input'))
    tagsQuestao.push(document.createElement('label'))
    tagsQuestao.push(document.createElement('p'))
    tagsQuestao.push(document.createElement('input'))
    tagsQuestao.push(document.createElement('hr'))
    montagemDaQuestao(tagsQuestao, numero)
}

function montagemDaQuestao(tagsQuestao, numero) {
    
}

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