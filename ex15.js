//Revenda de carros!
const testaCarro = (modeloEscolhido) => {//Fiz com arrow pq me deu vontade KKKKK
    switch (modeloEscolhido){
        case 'hatch':
            return 'Compra efetuada com sucesso!'
        case 'sedans':
        case 'motocicleta':
        case 'caminhonetes':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'        
    }
}
console.log(testaCarro('hatch'))
console.log(testaCarro('motocicleta'))
console.log(testaCarro('caminhonetes'))
console.log(testaCarro('caminhão'))