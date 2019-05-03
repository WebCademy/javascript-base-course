let obj, person

console.log('----------- 1 -----------')
// Объеявление функции в объекте

obj = {
	name: 'Алексей',
	// sayHello: function sayHello () {
	// 	console.log(`Привет! Меня зовут ${this.name}`)
	// }
	sayHello () {
		console.log(`Привет! Меня зовут ${this.name}`)
	}
}

obj.sayHello()



console.log('----------- 2 -----------')
// У объекта может быть много функций, и они могут использовать друг друга

obj = {
	value: 5,

	inc () {
		this.value += 1
	},

	dec () {
		this.value -= 1
	},

	// double increment
	dInc () {
		this.inc()
		this.inc()
	}
}

console.log(obj.value)

obj.inc()
console.log(obj.value)

obj.dec()
console.log(obj.value)

obj.dInc()
console.log(obj.value)



console.log('----------- 3 -----------')
// Getter

person = {
	name: 'Алексей',
	family: 'Данчин',

	get fullName () {
		return `${this.name} ${this.family}`
	}
}

console.log(person.fullName)



console.log('----------- 4 -----------')
// Setter

person = {
	name: 'Алексей',
	family: 'Данчин',

	get fullName () {
		return `${this.name} ${this.family}`
	},

	set fullName (str) {
		str = str.split(' ')
		this.name = str[0]
		this.family = str[1]
	}
}

console.log(person.fullName)

person.fullName = 'Фродо Бегенс'

console.log(person)



// Важно! Используйте getter и setter только для очевидных вещей