const asg = 1
const bsg = 3
const csg = 2

function bhaskara (a,b,c){
    let delta = (b**2) - 4*a*c
    let resultado = []
    let menosX = (-b - (delta**(1/2)))/(2*a)
    let maisX=  (-b + (delta**(1/2)))/(2*a)

    if (delta < 0){
        return console.log(`O valor de delta é negativo, não temos raízes reais!`)
    }
    else{
        resultado.push(maisX)
        resultado.push(menosX)
        return console.log(`As raizes são: ${resultado}`)
    }
}

bhaskara(asg, bsg, csg)