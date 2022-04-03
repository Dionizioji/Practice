//Calculadora de ano bissexto
const calculaBissexto = (n) => {
    if(n % 400 === 0){
            return true
        } else if(n % 100 === 0) {
            return false
        } else if(n % 4 === 0) {
            return true
        } else {
            return false
        }
}
console.log(calculaBissexto(16))
console.log(calculaBissexto(1996))
console.log(calculaBissexto(1980))
console.log(calculaBissexto(1984))
console.log(calculaBissexto(2000))
console.log(calculaBissexto(2005))