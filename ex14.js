//Testando frutas:
function testeFruta (fruta){
    switch (fruta){
        case 'maça':
            console.log('Não vendemos esta fruta aqui')
        break
        case 'kiwi':
            console.log('Estamos em escassez de kiwis')
        break
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo')
        break
        default:
            console.log('erroooooou!')
        break
        }
}
testeFruta('maça')
testeFruta('kiwi')
testeFruta('melancia')
testeFruta('uva')