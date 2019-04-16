let person

console.log('----------- 1 -----------')

person = {
	name: 'Алексей',
	family: 'Данчин',
	sayHello () {
		console.log(`Привет! Меня зовут ${this.name} ${this.family}`)
	}
}
console.log({ person })



console.log('----------- 2 -----------')

person = createPerson('Алексей', 'Данчин')
console.log({ person })

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



console.log('----------- 3 -----------')

person = new Person('Алексей', 'Данчин')
console.log({ person })

function Person (name, family) {
	this.name = name
	this.family = family

	this.sayHello = () => {
		console.log(`Привет! Меня зовут ${this.name} ${this.family}`)
	}
}



console.log('----------- 4 -----------')
// Проототип и очередность инициализации

function Person (name, family) {
	this.name = name
	this.family = family
}

Person.prototype.age = 26

Person.prototype.sayHello = function () {
	console.log(`Привет! Меня зовут ${this.name} ${this.family}`)
}

Person.someFunction = function someFunction () {}

person = new Person('Алексей', 'Данчин')
console.log({ person })
person.sayHello()



console.log('----------- 5 -----------')

class Point {
	constructor (x, y) {
		// console.log(this)
		
		this.x = x
		this.y = y
	}

	getDist (point) {
		return ((this.x - point.x)**2 + (this.y - point.y)**2)**0.5
	}

	get fullCoordinats () {
		return `(${this.x}; ${this.y})`
	}

	set fullCoordinats (str) {
		const coordinats = str.slice(1, -1).split('; ').map(Number)

		this.x = coordinats[0]
		this.y = coordinats[1]

		return str
	}

	static getDist (a, b) {
		return ((a.x - b.x)**2 + (a.y - b.y)**2)**0.5
	}
}

const pointA = new Point(100, 25)
const pointB = new Point(30, 12)

console.log({ pointA })
console.log(pointA.fullCoordinats)

pointA.fullCoordinats = '(0; -100)'
console.log({ pointA })

console.log(pointA.getDist(pointB))
console.log(Point.getDist(pointA, pointB))