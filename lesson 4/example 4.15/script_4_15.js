let point

console.log('----------- 1 -----------')
// Возвращение одного и того же объекта

point = { x: 0, y: 0 }

console.log(getOnePoint())
console.log(getOnePoint() === getOnePoint())

function getOnePoint () {
	return point
}



console.log('----------- 2 -----------')
// генерация объектов

console.log(getPoint(1, 1))
console.log(getPoint(1, 1) === getPoint(1, 1))

function getPoint (x, y) {
	const point = {
		x: x,
		y: y
	}

	return point
}



console.log('----------- 3 -----------')
// генерация объектов с методами

person1 = createPerson('Алексей', 'Данчин')
person2 = createPerson('Фродо', 'Бегенс')

person1.sayHello()
person2.sayHello()

function createPerson (name, family) {
	const person = {
		name: name,
		family: family,
		sayHello () {
			console.log(`Привет! Меня зовут ${this.name} ${this.family}`)
		}
	}

	return person
}