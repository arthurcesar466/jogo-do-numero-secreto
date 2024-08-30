let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemIncial(){
  exibirTextoNaTela("h1", "Jogo do Número secreto");
exibirTextoNaTela("p", "Escolha um Número entre 1 e 10");

}

exibirTextoNaTela("h1", "Jogo do Número secreto");
exibirTextoNaTela("p", "Escolha um Número entre 1 e 10");

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
      exibirTextoNaTela('h1','Acertou!!');
      let palavrasTentiva = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavrasTentiva}`;
      exibirTextoNaTela('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      if (chute > numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
        exibirTextoNaTela('p','O número secreto é maior');
        }
        tentativas ++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
  chute = document.querySelector ('input');
  chute.value = '';
}
function reniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
   tentativas = 1;
   exibirMensagemIncial();
   document.getElementById('reiniciar').setAttribute('disabled', true);

}

