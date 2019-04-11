console.log('----------- 1 -----------')
// arguments

fn(1, 2, 3)
fn([1, 2, 3])
fn('name')

function fn () {
	console.log(arguments)
}



console.log('----------- 2 -----------')
// arguments.length

getSum(1, 2, 3)

function getSum (a, b, c) {
	const length = arguments.length
	console.log({ length }, typeof length)

	return a + b + c
}



console.log('----------- 3 -----------')
// arguments.callee

writeToZero(5)

function writeToZero (number) {
	console.log(number, arguments.callee === writeToZero)

	if (number > 0) {
		// writeToZero(number - 1)
		arguments.callee(number - 1)
	}
}



console.log('----------- 4 -----------')
// arguments не Array
// Чтобы использовать функции массива нужно его превратить в массив

oops('a', 'b', 'c')

function oops () {
	console.log({ arguments })

	const args = Array.from(arguments)

	console.log({ args })

	for (let i = 0; i < args.length; i++) {
		console.log(i, args[i])
	}
}



console.log('----------- 5 -----------')
// Рекурсия

console.log(factorial(5))

function factorial (n) {
	if (n < 2) {
		return 1
	}

	return n * factorial(n - 1)
}