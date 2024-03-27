
var botaoDeResposta = document.querySelectorAll('.chamaResposta')

for (let i = 0; i < botaoDeResposta.length; i++) {
    botaoDeResposta[i].addEventListener('click', function(){
        
        if (botaoDeResposta[i].value == 'Resposta') {
            this.parentNode.nextElementSibling.style.animation = 'mostrar2 1s ease-in-out forwards'
            this.parentNode.nextElementSibling.style.display = 'block'
            botaoDeResposta[i].value = 'Ocultar'
        } else {
            this.parentNode.nextElementSibling.style.animation = 'ocultar 1s ease-in-out forwards'
            setTimeout(() => {
                this.parentNode.nextElementSibling.style.display = 'none'
                botaoDeResposta[i].value = 'Resposta'
            }, 900);
        }    
    })    
}
