//conta o numero de vezes o primeiro valor foi superado e não superado
const pontuacao = ['22','14','17','11','8','25','11','25','31','6','1','15','27','45']
function verifica (pontuacao){
let contaMaior = 0
let maior = parseInt(pontuacao[0])
let contaMenor = 0
let menor = parseInt(pontuacao[0])

for (i = 1 ; i < (pontuacao.length) ; i++){
    if (maior < parseInt(pontuacao[i])){
        contaMaior += 1
        maior = pontuacao[i]
    }
    if (menor > parseInt(pontuacao[i])){
        contaMenor += 1
        menor = pontuacao[i]
    }
}

let resultado = [menor, maior]
console.log(`A menor e maior pontuação foram, respectivamente ${resultado}!`)
resultado = [contaMenor, contaMaior]
console.log(`E quebradas ${resultado} vezes, respectivamente em relação à pontuação inicial!`)
}

verifica(pontuacao)