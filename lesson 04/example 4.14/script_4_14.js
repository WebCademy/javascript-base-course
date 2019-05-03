let person

console.log('----------- 1 -----------')
// Имя для функции:

// воздействие/взаимодействие: get, set, update, upgrade, send, emmit
// глагол: do, move, change, up, run, strop, start
// вопрос: is, have, has, hade, was - возвращает boolean

// Из имени функции понятно, что она возвращает

// Плохо
function sum () {}

// Хорошо
function getSum () {}

// Плохо
function adult () {}

// Хорошо
function isAdult () {}
function setAdultFlag () {}
function getAdultsFrom () {}



console.log('----------- 2 -----------')
// Имя метода/функции объекта

person = {
	name: 'Алексей',

	// Плохо
	hello () {},

	// Хорошо
	sayHello () {}
	getGreeting () {}
}



console.log('----------- 3 -----------')
// Не усложняйте доступ к структуре объекта

// Плохо
person = {
	_name: 'Алексей',
	_family: 'Данчин',
	_age: 26,

	getName () {
		return this._name
	},

	setName (name) {
		return this._name = name
	},


	getFamily () {
		return this._family
	},

	setFamily (family) {
		return this._family = family
	},


	getAge () {
		return this._age
	},

	setAge (age) {
		return this._age = age
	},


	getFullName () {
		return `${this.getName()} ${this.getFamily()}`
	},

	setFullName (str) {
		const pair = str.split(' ')

		this.setName(pair[0])
		this.setFamily(pair[1])

		return str
	}
}

// Хорошо
person = {
	name: 'Алексей',
	family: 'Данчин',
	age: 26,

	get fullName () {
		return `${this.name} ${this.family}`
	},

	set fullName (str) {
		const pair = str.split(' ')

		this.name = pair[0]
		this.family = pair[1]

		return str
	}
}