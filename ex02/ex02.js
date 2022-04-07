function clicked (event) {
    event.preventDefault
    let lado1 = parseInt(document.getElementsByClassName("triangle1"))
    let lado2 = parseInt(document.getElementsByClassName("triangle2"))
    let lado3 = parseInt(document.getElementsByClassName("triangle3"))
    var result = document.getElementsByName("span")  
    result.appendChild(document.createElement('div'))
    /*if(l1!==l2 && l2!==l3){
        return ("O triângulo é ESCALENO!")
    }
    else if(l1==l2 && l2==l3){
        return console.log("O triângulo é EQUILÁTERO!")
    }
    else{
        return console.log('O triângulo é ISÓSCELES!')
    }*/
}
clicked()