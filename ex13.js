//Dia útil
function testaDia (n){
    switch (n) {
        case 1 || 7:
        console.log('Fim de semana! Uhuuuu!')
        break
        default:
            console.log('Partiu, trabalhar!')
        break
    }
}
testaDia(1)