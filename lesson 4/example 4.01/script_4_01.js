let greeting, sum

console.log('----------- 1 -----------')
// Объявление функции и вызов функции

function someFunctionName () {
	console.log('"someFunctionName" emitted and fired')
}

someFunctionName()



console.log('----------- 2 -----------')
// Вызов фукнции с параметрами

function writeNumbers (a, b, c) {
	console.log({ a, b, c })
}

writeNumbers(0, -100, 123)



console.log('----------- 3 -----------')
// Конструкция return

function getGreetingString () {
	return 'Hello world!'
}

greeting = getGreetingString()
console.log({ greeting })



console.log('----------- 4 -----------')
// Особенность использование return

function oneConsole () {
	console.log('fired 1')
	console.log('fired 2')
	return null
	console.log('fired 3')
}

oneConsole()



console.log('----------- 5 -----------')
// Взаимосвязь между аргументами и return

function getSum (a, b) {
	return a + b
}

sum = getSum(5, 4)
console.log({ sum })



console.log('----------- 6 -----------')
// Основное предназначение функций:
// 1) вынести повторяющийся код
// 2) дать имя алгоритму

sum = getSum(1, 2) + getSum(10, 20)
console.log({ sum })



console.log('----------- 7 -----------')
// Безпромежуточное использование функций

// const a = getSum(1, 2)
// const b = getSum(10, 20)
// const sum = getSum(a, b)

sum = getSum(getSum(1, 2), getSum(10, 20))
console.log({ sum })