let a

console.log('----------- 1 -----------')
// Область видимости объявленных функций

f1()
// f2()
// f3()

function f1 () { console.log('f1') }

{
	f1()
	f2()
	// f3()

	function f2 () { console.log('f2') }

	{
		f1()
		f2()
		f3()

		function f3 () { console.log('f3') }
	}
}



console.log('----------- 2 -----------')
// Доступ к переменным из разных областей видимости

a = 0
console.log({ a })

inc1()
console.log({ a })

function inc1 () {
	a++
}

{
	inc2()
	console.log({ a })

	function inc2 () {
		a++
	}
}

{
	let a = 100
	console.log({ a })

	inc3()
	console.log({ a })

	function inc3 () {
		a++
	}
}

console.log({ a })



console.log('----------- 3 -----------')
// Особенности с var

// let n
// let n

var b = 0
var b = 0
console.log({ b })

inc1()
console.log({ b })

function inc1 () {
	b++
}

{
	inc2()
	console.log({ b })

	function inc2 () {
		b++
	}
}

{
	var b = 100 // Не создает новую переменную
	console.log({ b })

	inc3()
	console.log({ b })

	function inc3 () {
		b++
	}
}

console.log({ b })



console.log('----------- 4 -----------')
// var внутри функции

var name = 'Алексей'

func1()

function func1 () {
	var family = 'Данчин'

	console.log(name, family)
}

// console.log(name, family)