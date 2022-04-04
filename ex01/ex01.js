
let resultado = document.getElementsById("botão")
    resultado.addEventListener("submit", function (evento){
        evento.preventDefault()
        let valor1 = document.getElementsByClassName("firstNumber")
        let valor2 = document.getElementById("secondNumber")
    return result.innerHTML = (`soma = ${valor1+valor2} \nsubtração = ${valor1 - valor2}\ndivisão = ${valor1 / valor2}\nmultiplicação = ${valor1 - valor2}`)
})
