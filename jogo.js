var altura = 0
var largura = 0
var vidas = 1
var tempo = 25

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    //1500
    criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
    //1000
    criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
    //750
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {
    altura = window.screen.availHeight //Encontrar a partir do objeto windown, que representa o browser object model
    largura = window.screen.availWidth //Encontrar a partir do objeto windown, que representa o browser object model

    console.log(altura, largura)

}

ajustaTamanhoPalcoJogo(altura, largura)

var cronometro = setInterval(function() {

    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
    
}, 1000)

function posicaoRandomica() {

    //remover o mosquito anterior caso exista
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()


        if(vidas > 3) {
            
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

            vidas++
        }

    }

    // Gerando valores randômicos que vão de 0 a 1, para que as posições de x e y mudem respeitando o tamanho da tela.
    var posicaoY = Math.ceil(Math.random() * window.innerHeight);
    var posicaoX = Math.ceil(Math.random() * window.innerWidth);

    if (posicaoY > (window.innerHeight - 50) || posicaoX > (window.innerWidth - 50)) {

        posicaoY = 15;

        posicaoX = 38;

    }

    //Criando e incluindo elemento Mosquito no body da página.

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    /*definindo posições do aparecimento da imagem na página, a posição absoluta é necessária,
    pois assim a imagem não se prenderá a um elemento específico para se posicionar, e sim à própria página*/
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {

    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}