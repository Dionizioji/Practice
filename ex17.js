//Exercício 17 lista do curso JAVASCRIPT CODERBR
function imprimePlano (plano, salario){
    switch (plano){
        case 'A':
            return (salario + salario*0.1)
        case 'B':
            return (salario + salario*0.2)
        case 'C':
            return (salario + salario*0.3)
        default:
            return ('plano inválido!')
    } 
}
console.log(imprimePlano('A',1000))
console.log(imprimePlano('B',1000))
console.log(imprimePlano('C',1000))
console.log(imprimePlano('D',1000))