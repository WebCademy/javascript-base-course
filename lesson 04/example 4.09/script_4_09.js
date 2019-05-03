let numbers, sum, obj, obj1, obj2, sayHello_obj1, sayHello_obj2

console.log('----------- 1 -----------')
// bind

obj1 = { name: 'Алексей' }
obj2 = { name: 'Тимофей' }

function sayHello () {
	console.log(`Привет! Меня зовут ${this.name}`)
}

sayHello()

sayHello_obj1 = sayHello.bind(obj1)
sayHello_obj1()
console.log(obj1)

sayHello_obj2 = sayHello.bind(obj2)
sayHello_obj2()
console.log(obj2)


sayHello_obj2 = sayHello_obj1.bind(obj2)
sayHello_obj2()

console.log(sayHello_obj1 === sayHello)
console.log(sayHello_obj1 === sayHello_obj2)



console.log('----------- 2 -----------')
// bind и аргументы

obj1 = { name: 'Алексей' }
sum = getSum.bind(obj1)

sum(1, 2)

function getSum (a, b) {
	console.log(`Привет! Меня зовут ${this.name}`)
	console.log({ a, b })

	return a + b
}



console.log('----------- 3 -----------')
// call

obj1 = { name: 'Алексей' }

// sayHello.bind(obj1)()
sayHello.call(obj1)

function sayHello () {
	console.log(`Привет! Меня зовут ${this.name}`)
}



console.log('----------- 4 -----------')
// call и аргументы

obj1 = { name: 'Алексей' }
getSum.call(obj1, 1, 2)

function getSum (a, b) {
	console.log(`Привет! Меня зовут ${this.name}`)
	console.log({ a, b })

	return a + b
}



console.log('----------- 5 -----------')
// apply

obj1 = { name: 'Алексей' }
numbers = [1, 2]

// getSum.call(obj1, 1, 2)
getSum.apply(obj1, numbers) // Аргументы в массиве

function getSum (a, b) {
	console.log(`Привет! Меня зовут ${this.name}`)
	console.log({ a, b })

	return a + b
}