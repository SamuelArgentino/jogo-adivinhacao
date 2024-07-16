let listaDeNumerosSorteador = [];
let numeroLimite = 10;
let numeroSecreto = gerararNumeroAleatorio();
console.log(numeroSecreto);
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        }
        else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
} 

function gerararNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quandidadeDeElementosNaLista = listaDeNumerosSorteador.length;

    if (quandidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteador = [];
    }

    if (listaDeNumerosSorteador.includes(numeroEscolhido)) {
        return gerararNumeroAleatorio();
    } else {
        listaDeNumerosSorteador.push(numeroEscolhido);
        console.log(listaDeNumerosSorteador);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerararNumeroAleatorio();
    limparCampo();
    tentarivas = 0;
    exibirMensagemInicial();
    console.log(numeroSecreto);
    document.getElementById('reiniciar').setAttribute('disabled', true);
}