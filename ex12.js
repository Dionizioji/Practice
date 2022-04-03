//Função que calcula fatorial (recursividade)
function fatorial (n){
    if(n==0){
        return 1
    }else if(n<0){
        return 'Entrada inválida!'
    }else{
        return  n*fatorial(n-1) 
    }
}
console.log(fatorial(1))
console.log(fatorial(2))
console.log(fatorial(1))
console.log(fatorial(5))
console.log(fatorial(57))