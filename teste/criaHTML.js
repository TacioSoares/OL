const quantidadeDeQuestoes = Object.keys(questoes.multipla)

criarQuestoesNoHTML()

function criarQuestoesNoHTML() {
    quantidadeDeQuestoes.forEach(criarTags)
}

function criarTags(numero, indice) {
    var tagsQuestao = []
    tagsQuestao.push(document.createElement('div')) // div da questao 0
    tagsQuestao.push(document.createElement('span')) // span do numero da questao 1
    tagsQuestao.push(document.createElement('div')) // div da pergunta 2
    tagsQuestao.push(document.createElement('h4')) // h4 do enunciado 3
    tagsQuestao.push(document.createElement('div')) // div das alternativas 4
    tagsQuestao.push(document.createElement('ul')) // ul das alternativas 5
    tagsQuestao.push(document.createElement('li')) // li da alternativa1 6
    tagsQuestao.push(document.createElement('input')) // input radio da alternativa1 7
    tagsQuestao.push(document.createElement('label')) // label do radio da alternativa1 8
    tagsQuestao.push(document.createElement('hr')) // hr da alternativa1 9
    tagsQuestao.push(document.createElement('li')) // li da alternativa2 10
    tagsQuestao.push(document.createElement('input'))// input radio da alternativa2 11
    tagsQuestao.push(document.createElement('label')) // label do radio da alternativa2 12
    tagsQuestao.push(document.createElement('hr')) // hr da alternativa2 13
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
    tagsQuestao.push(document.createElement('p'))
    tagsQuestao.push(document.createElement('input'))
    tagsQuestao.push(document.createElement('hr'))
    montagemEIdentificaDaQuestao(tagsQuestao, numero, indice)
}

function montagemEIdentificaDaQuestao(tagsQuestao, numero, indice) {
    document.body.append(tagsQuestao[0]) // inserindo div questao dentro do body

    adicionaClass(tagsQuestao[0], numero, 'questao')

    tagsQuestao[0].append(tagsQuestao[1]) // inserindo span dentro da div
    tagsQuestao[1].innerHTML = `Questão ${indice+1}`

    adicionaClass(tagsQuestao[1], numero, 'numeroDaQuestão')

    adicionaClass(tagsQuestao[1], numero, 'numeroDaQuestão')

    tagsQuestao[0].append(tagsQuestao[2]) // inserindo div pergunta dentro da div questao

    adicionaClass(tagsQuestao[2], numero, 'perguntas')

    tagsQuestao[2].append(tagsQuestao[3]) // inserindo h4 da pergunta dentro da div pergunta
    tagsQuestao[2].append(tagsQuestao[4]) // inserindo div alternativa dentro da div pergunta

    adicionaClass(tagsQuestao[4], numero, 'alternativas')

    tagsQuestao[4].append(tagsQuestao[5]) // inserindo ul dentro da div alternativa
    tagsQuestao[5].append(tagsQuestao[6]) // inserindo li dentro da ul
    tagsQuestao[6].append(tagsQuestao[7]) // inserindo input dentro da li

    adicionaAtributo(tagsQuestao[7], numero, 'type', 'radio')
    adicionaAtributo(tagsQuestao[7], numero, 'name', numero)
    adicionaAtributo(tagsQuestao[7], numero, 'id', numero+'-01')


    tagsQuestao[6].append(tagsQuestao[8]) // inserindo label dentro da li
    
    
    adicionaAtributo(tagsQuestao[8], numero, 'for', numero+'-01')

    tagsQuestao[5].append(tagsQuestao[9]) // inserindo hr dentro da ul
    tagsQuestao[5].append(tagsQuestao[10]) // inserindo segunda li dentro da ul
    tagsQuestao[10].append(tagsQuestao[11]) // inserindo input dentro da segunda li

    adicionaAtributo(tagsQuestao[11], numero, 'type', 'radio')
    adicionaAtributo(tagsQuestao[11], numero, 'name', numero)
    adicionaAtributo(tagsQuestao[11], numero, 'id', numero+'-02')

    tagsQuestao[10].append(tagsQuestao[12]) // inserindo label dentro da segunda li

    adicionaAtributo(tagsQuestao[12], numero, 'for', numero+'-02')

    tagsQuestao[5].append(tagsQuestao[13]) // inserindo segunda hr dentro da ul
    tagsQuestao[5].append(tagsQuestao[14]) // inserindo li dentro da ul
    tagsQuestao[14].append(tagsQuestao[15]) // inserindo input dentro da li

    adicionaAtributo(tagsQuestao[15], numero, 'type', 'radio')
    adicionaAtributo(tagsQuestao[15], numero, 'name', numero)
    adicionaAtributo(tagsQuestao[15], numero, 'id', numero+'-03')

    tagsQuestao[14].append(tagsQuestao[16]) // inserindo label dentro da li

    adicionaAtributo(tagsQuestao[16], numero, 'for', numero+'-03')

    tagsQuestao[5].append(tagsQuestao[17]) // inserindo hr dentro da ul
    
    tagsQuestao[5].append(tagsQuestao[18]) // inserindo li dentro da ul
    tagsQuestao[18].append(tagsQuestao[19]) // inserindo input dentro da li

    adicionaAtributo(tagsQuestao[19], numero, 'type', 'radio')
    adicionaAtributo(tagsQuestao[19], numero, 'name', numero)
    adicionaAtributo(tagsQuestao[19], numero, 'id', numero+'-04')

    tagsQuestao[18].append(tagsQuestao[20]) // inserindo label dentro da li

    adicionaAtributo(tagsQuestao[20], numero, 'for', numero+'-04')

    tagsQuestao[5].append(tagsQuestao[21]) // inserindo hr dentro da ul
    
    tagsQuestao[5].append(tagsQuestao[22]) // inserindo li dentro da ul
    tagsQuestao[22].append(tagsQuestao[23]) // inserindo input dentro da li

    adicionaAtributo(tagsQuestao[23], numero, 'type', 'radio')
    adicionaAtributo(tagsQuestao[23], numero, 'name', numero)
    adicionaAtributo(tagsQuestao[23], numero, 'id', numero+'-05')

    tagsQuestao[22].append(tagsQuestao[24]) // inserindo label dentro da li

    adicionaAtributo(tagsQuestao[24], numero, 'for', numero+'-05')

    tagsQuestao[2].append(tagsQuestao[25]) // inserindo input Button dentro da div perguntas

    tagsQuestao[25].append(tagsQuestao[26])

    adicionaAtributo(tagsQuestao[26], numero, 'type', 'button')
    adicionaAtributo(tagsQuestao[26], numero, 'value', 'Resposta')
    adicionaAtributo(tagsQuestao[26], numero, 'class', 'chamaResposta')

    tagsQuestao[2].append(tagsQuestao[27]) // inserindo hr no Final de cada pergunta
}


function adicionaClass(elemento, numero, nomeClass) {
    elemento.setAttribute('class', `${nomeClass}`) 
}

function adicionaAtributo(elemento, numero, tipo, atributo) {
    elemento.setAttribute(`${tipo}`, `${atributo}`)
}