//Exercício 19 lista do curso JAVASCRIPT CODERBR
function pedido (codigo, quantidade){
    switch(codigo){
        case 100:
            return `O pedido foi: ${quantidade} cachorro(s) quente(s). Total: R$ ${3*quantidade},00`
        case 200:
            return `O pedido foi: ${quantidade} Hamburguer(es) simples(s). Total: R$ ${4*quantidade},00`
        case 300:
            return `O pedido foi: ${quantidade} Cheesburguer(s). Total: R$ ${Math.round(5.5*quantidade)},00`    
        case 400:
            return `O pedido foi: ${quantidade} Bauru(s). Total: R$ ${Math.round(7.5*quantidade)},00` 
        case 500:
            return `O pedido foi: ${quantidade} Refrigerante(s). Total: R$ ${Math.round(3.5*quantidade)},00` 
        case 600:
            return `O pedido foi: ${quantidade} Suco(s). Total: R$ ${Math.round(2.8*quantidade)},00` 
        }
}
console.log(pedido(100, 4))
console.log(pedido(200,5))
console.log(pedido(300,5))
console.log(pedido(400,3))
console.log(pedido(500,3))
console.log(pedido(600,1))