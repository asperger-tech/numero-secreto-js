const maiorNumero = 1000
const menorNumero = 1
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorNumero + 1)
}

const numeroMenorValor = document.getElementById('menor-valor')
numeroMenorValor.innerHTML = menorNumero

const numeroMaiorValor = document.getElementById('maior-valor')
numeroMaiorValor.innerHTML = maiorNumero


console.log('Número aleatório: ', numeroSecreto)