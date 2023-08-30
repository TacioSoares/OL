const botaoResposta = document.querySelectorAll ('.chamaResposta')

console.log(ordemDasQuestoes)

botaoResposta.forEach(botao => {
    botao.addEventListener('click', confereResposta)
});

function mensagem(feedback, botao, questaoClicada) {
    if(feedback) {
        botao.parentNode.innerHTML = `<p>Resposta Correta`
    } else {
        botao.parentNode.innerHTML = `<p>Resposta Incorreta! <br><br></P
        <p>A resposta certa é:<br><br></p>
        <p>${questaoClicada.resposta}</p>`
    }
}

function confereResposta(event) {
    let botao = event.target
    let inputs = event.target.parentNode.parentNode.querySelectorAll('input')
    let numeroClicada = botao.parentNode.parentNode.parentNode.querySelector('span').innerHTML.substring(8)
    let questaoClicada = ordemDasQuestoes[numeroClicada-1]
    let erro = 0
    inputs.forEach(input => {
        if(input.checked) {
            console.log(input.nextElementSibling.innerText)
            if(questaoClicada.responder((input.nextElementSibling.innerHTML))) {
                return mensagem(true, botao, questaoClicada)
            } else {
                return mensagem(false, botao, questaoClicada)
            }
        } else {
            erro += 1
        }
    })

}

// input.nextElementSibling