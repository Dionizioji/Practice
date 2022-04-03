//Exercício 20 lista do curso JAVASCRIPT CODERBR
function contaCedulas (valor){
    let resto = valor%100
    let resto1 = resto%50
    let resto2 = resto1%10
    let resto3 = resto2%5
    let cedCem = Math.floor(valor/100)
    let cedCinquenta = Math.floor(resto/50)
    let cedDez = Math.floor(resto1/10)
    let cedCinco = Math.floor(resto2/5)
    let cedUm = Math.floor(resto3/1)
    let vetor = [cedCem, cedCinquenta, cedDez, cedCinco, cedUm]  

    if(vetor[0] !== 0){
        console.log(`Notas de cem: ${cedCem}`)
    }
    if(vetor [1] !== 0){
        console.log(`Notas de cinquenta: ${cedCinquenta}`)
    }
    if(vetor [2] !== 0){
        console.log(`Notas de dez: ${cedDez}`)
    }
    if(vetor [3] !== 0){
        console.log(`Notas de cinco: ${cedCinco}`)
    }
    if(vetor [4] !== 0){
        console.log(`Notas de um: ${cedUm}`)
    }
}
contaCedulas(1112)

