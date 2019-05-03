let beforeFn, number

console.log('----------- 1 -----------')
// Всплывающее объявление функции

fn()

function fn () {
	console.log('fired')
}



console.log('----------- 2 -----------')
// Ленивое определние функции

var func = function func () {
	console.log('fired')
}

func()



console.log('----------- 3 -----------')
// Имя функции при ленивом объявление функции

var func = function ABCDEF_012345 () {
	console.log('fired')
}

console.log({ func })
// console.log(ABCDEF_012345) // Нет такого



console.log('----------- 4 -----------')
// Отсутствие имени функции при ленивом объявление функции

var func = function () {
	console.log('fired')
}

console.log({ func })



console.log('----------- 5 -----------')
// Ленивые функции не всплывают

// beforeFn()

// beforeFn = function () {
// 	console.log('fired')
// }



console.log('----------- 6 -----------')
// Пример выбора объявляемой ленивой функции

number = 2

if (number === 1) {
	fn = function fn () {
		console.log('first option')
	}
}

if (number === 2) {
	fn = function fn () {
		console.log('second option')
	}
}

fn()