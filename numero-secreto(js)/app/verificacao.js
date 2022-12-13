function verificaChute(chute) {
    const numero = +chute 

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += ('<div>Valor Inválido</div>')
        return
    }

    if (valorMaiorMenorLimite(numero)){
        elementoChute.innerHTML += (`<div>O número deve estar entre ${menorNumero} e ${maiorNumero}</div>`)
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h1>Você acertou!</h1>
        <h3>O número secreto era ${numeroSecreto}</h3> 
        <button id="btn">Jogar novamente</button>
        `
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML += (`<div class="maiormenor">O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`)
    }else {
        elementoChute.innerHTML += (`<div class="maiormenor">O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`)
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function valorMaiorMenorLimite(numero){
    return numero < menorNumero || numero > maiorNumero
}

document.body.addEventListener('click', e => {
    if (e.target.id="btn"){
        window.location.reload()
    }
})
