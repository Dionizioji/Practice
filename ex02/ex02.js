var cont = 0
function clicking(){
    cont = 1
    var lado1 = document.getElementById("triangleOne")
    var lado2 = document.getElementById("triangleTwo")
    var lado3 = document.getElementById("triangleThree")
    var result = document.getElementById("Resultado")  
        
    //Condição pra ser triângulo
    if((eval(lado1.value) < Math.abs(eval(lado2.value) + eval(lado3.value))) && (eval(lado2.value) < Math.abs(eval(lado1.value) + eval(lado3.value))) && (eval(lado3.value) < Math.abs(eval(lado2.value) + eval(lado1.value)))){
        if(eval(lado1.value)<=0 || eval(lado2.value)<=0 || eval(lado1.value)<=0){
            window.alert("Valores inválidos!")
       // }//else if((typeof lado1) !== 'Number' || eval(lado2.value)=='' || eval(lado1.value)==''){
                window.alert("Valores inválidos!")
        }else if(eval(lado1.value) !== eval(lado2.value)  && eval(lado2.value)  !== eval(lado3.value) && eval(lado1.value) !== eval(lado3.value)){
            result.innerText += " ESCALENO!"
        }else if((eval(lado1.value) === eval(lado2.value)) && eval(lado2.value) === eval(lado3.value) && eval(lado1.value) === eval(lado3.value)){
            result.innerText += " EQUILÁTERO!"
        }else{
            result.innerText += " ISÓSCELES!"
        }
    }else{
        window.alert("Esses valores não formam um triângulo!") 
    }
}

function clique(){

    var result = document.getElementById("Resultado")
    var lado1 = document.getElementById("triangleOne")
    var lado2 = document.getElementById("triangleTwo")
    var lado3 = document.getElementById("triangleThree")
    lado1.value = ''
    lado2.value = ''
    lado3.value = ''
    result.innerText = "O triângulo é: "
    
}