console.log('----------- 1 -----------')
// Эквивалент всплывающего объявления функции (1 -> 2)

sayHello('World')

function sayHello (name) {
	console.log(`Hello ${name}!`)
}

function getSum (a, b) {
	return a + b
}

console.log({ sayHello }, typeof sayHello)

sayHello = 5

console.log({ sayHello }, typeof sayHello)



console.log('----------- 2 -----------')

let sayHello, getSum

sayHello = function sayHello (name) {
	console.log(`Hello ${name}`)
}

getSum = function getSum (a, b) {
	return a + b
}

sayHello('World')

console.log({ sayHello }, typeof sayHello)

sayHello = 5

console.log({ sayHello }, typeof sayHello)