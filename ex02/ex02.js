function clicking(){
    var lado1 = document.getElementById("triangleOne")
    var lado2 = document.getElementById("triangleTwo")
    var lado3 = document.getElementById("triangleThree")
    var result = document.getElementById("Resultado")  
    if(eval(lado1.value)<=0 || eval(lado2.value)<=0 || eval(lado1.value)<=0){
        window.alert("Valores inválidos!")
    }else if(eval(lado1.value) !== eval(lado2.value)  && eval(lado2.value)  !== eval(lado3.value)){
        result.innerText += " ESCALENO!"
    }else if((eval(lado1.value) === eval(lado2.value)) && eval(lado2.value) === eval(lado3.value) && eval(lado1.value) === eval(lado3.value)){
        result.innerText += " EQUILÁTERO!"
    }else{
        result.innerText += " ISÓSCELES!"
    }
}
function clique(){
    var result = document.getElementById("Resultado")
    result.innerText = "O triângulo é: "
    
}