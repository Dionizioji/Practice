//Classifica e arredonda notas > que 40 para o multiplo de cinco logo acima 
function classificaeArredonda(n){
    if(n<38){
        console.log(`Infelizmente vc foi reprovado! A sua nota final foi ${n}`)
    }else if(n>=38 && (((Math.ceil(n/5))*5)-n)<=3){
        console.log(`A sua nota inicial foi ${n}, com a correção foi para ${(Math.ceil(n/5))*5}, parabéns pela aprovação!`)
    }else{
        console.log(`A sua nota final foi ${n}, parebéns pela aprovação!`)
    } 
}
classificaeArredonda(100)
classificaeArredonda(51)
classificaeArredonda(67)
classificaeArredonda(38)
classificaeArredonda(27)
