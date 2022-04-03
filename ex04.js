const dividendo = 25
const divisor = 3

function divisao (dv,ds){
    return `O valor ${dv} dividido por ${ds} é igual a ${Math.floor(dv/ds)} e o resto da divisão é igual a ${dv%ds}`
}
console.log (divisao(dividendo,divisor))

