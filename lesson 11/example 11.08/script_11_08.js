console.log('----------- 1 -----------')

class Massiv extends Array {}

const array = new Massiv(100)
	.fill(0)
	.map(random)
	.sort(asc)
	

console.log(array)

function random () {
	return Math.floor(100 * Math.random())
}

function desc (a, b) {
	return b - a
}

function asc (a, b) {
	return a - b
}