let action = document.getElementById('botão')
let bOne = parseInt(document.getElementsByClassName('boxOne'))
let bTwo = parseInt(document.getElementsByClassName('boxTwo'))
function click(){
    var resultado = document.getElementsByClassName('result')
    var soma = bOne + bTwo
    window.alert(soma)
    resultado.innerText = soma
}
