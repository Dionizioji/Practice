//Calculadora ultra-básica
function calculadora (n1,n2,operador){
    switch(operador){
        case '+':
            return n1+n2
        case '-':
            return n1-n2
        case '/':
            return n1/n2
        case '*':
            return n1*n2
        case '^^':
            return Math.pow(n1,n2)
        default:
            return 'Operação inválida' 
    }
}
console.log(calculadora(5,5,'+'))
console.log(calculadora(5,5,'^^'))
console.log(calculadora(5,5,'a'))