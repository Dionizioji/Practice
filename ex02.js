const lado1 = 40
const lado2 = 40
const lado3 = 40

function classifica (l1,l2,l3) {
    if(l1!==l2 && l2!==l3){
        return console.log("O triângulo é ESCALENO!")
    }
    else if(l1==l2 && l2==l3){
        return console.log("O triângulo é EQUILÁTERO!")
    }
    else{
        return console.log('O triângulo é ISÓSCELES!')
    }
}
classifica(lado1,lado2,lado3)