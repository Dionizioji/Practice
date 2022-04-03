const cI = parseInt.document.getElementById('capitalInicial')
const tJ = parseInt.document.getElementById('taxadeJuros')
const tA = parseInt.document.getElementById('tempodeAplicacao')

console.log(cI)

let aplicacao = {
    capitalInicial: cI.value,
    taxaJuros: tJ.value,
    tempodeAplicacao: tA.value
}

function calculaSimples (cap, tax, tempo){
    return cap+(cap*tax*tempo)
}
jurosSimples.innerHTML += (`O montante final para a aplicação sob juros simples é: ${calculaSimples(aplicacao.capitalInicial, aplicacao.taxaJuros, (aplicacao.tempodeAplicacao)/100)}`)

function calculaComposto (cap, tax, tempo){
    return cap*((1+tempo)**tax)
}
jurosCompostos.innerHTML += (`O montante final para a aplicação sob juros compostos é: ${(calculaComposto(aplicacao.capitalInicial, aplicacao.taxaJuros, (aplicacao.tempodeAplicacao)/100)).toFixed(2)}`)



