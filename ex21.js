//Exercicio 21
function calculaPlano (idade){
        if(idade < 10){
            console.log(`O valor do plano é R$ 180,00`)
        }else if (idade >= 10 && idade < 30){
            console.log(`O valor do plano é R$ 150,00`)
        }else if (idade >= 30 && idade < 60){
            console.log(`O valor do plano é R$ 195,00`)
        }else{
            console.log(`O valor do plano é R$ 210,00`)
    }
}
calculaPlano(5)
calculaPlano(15)
calculaPlano(35)
calculaPlano(70)