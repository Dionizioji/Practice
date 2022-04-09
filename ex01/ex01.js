function clicking(){
	var bOne = document.getElementById('boxOne')
	var bTwo = document.getElementById('boxTwo')
	var res = document.getElementById('res')
	res.innerText = `A soma foi = ${parseInt(bOne.value) + parseInt(bTwo.value)}\n
					 A subtração foi = ${parseInt(bOne.value) - parseInt(bTwo.value)}\n
					 A multiplicação foi = ${parseInt(bOne.value) * parseInt(bTwo.value)}\n
					 A divisão foi =  ${parseInt(bOne.value) / parseInt(bTwo.value)}`
}
function resetando(){
	let restart = document.getElementsByClassName("resetButton")
	res.innerText = "The result will be displayed here!"
}