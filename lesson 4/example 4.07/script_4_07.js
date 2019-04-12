let obj, obj1, obj2, a

console.log('----------- 1 -----------')
// this - контекст
// По умолчанию window

f1()
// f2()

function f1 () {
	console.log(this === window)
	console.log(this)

	f2()

	function f2 () {
		console.log(this === window)
		console.log(this)
	}
}



console.log('----------- 2 -----------')
// Контекст функции объекта

// obj = {
// 	name: 'Aleksey',
// 	sayHello: function sayHello () {
// 		console.log(this)
// 	}
// }

obj = {
	name: 'Aleksey',
	sayHello () {
		console.log(this)
	}
}

obj.sayHello()



console.log('----------- 3 -----------')
// Контекст функции объекта смотря кто на нее ссыл

obj1 = { name: 'Aleksey' }
obj2 = { name: 'Timofey' }

function sayHello () {
	console.log(this)
}

obj1.sayHello = sayHello
obj2.sayHello = sayHello

obj1.sayHello()
obj2.sayHello()

console.log(obj1.sayHello === obj1.sayHello)



console.log('----------- 4 -----------')
// Область видимости

a = 100

obj = { name: 'Aleksey' }
obj.sayGreeting = sayGreeting

obj.sayGreeting()

function sayGreeting () {
	console.log(`Hello world! My name is ${this.name}`)
	console.log({ a })
}



console.log('----------- 5 -----------')
// Объявление функций всегда всплывает в самый вверх области видимости функции

a = 100

obj = { name: 'Aleksey' }
obj.sayGreeting = sayGreeting

obj.sayGreeting()

{
	let a = 200

	function sayGreeting () {
		console.log(`Hello world! My name is ${this.name}`)
		console.log({ a }) // Что? Где? Когда? Почему? Остановите планету, я сойду!
	}
}



// НИКОГДА НЕ ИСПОЛЬЗУЙТЕ В ФУНКЦИИ ПЕРЕМЕННЫЕ НЕ ИЗ КОНТЕКСТА ИЛИ НЕ ИЗ АРГУМЕНТОВ!!!
// ИСПОЛЬЗУЙТЕ ТОЛЬКО КОНТЕКСТ, АРГУМЕНТЫ И МЕТОДЫ/ОБЪЕКТЫ ОКРУЖЕНИЯ