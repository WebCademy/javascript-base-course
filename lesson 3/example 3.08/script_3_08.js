// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object

// Must have:
// keys, assign

const person = {
	name: 'Алексей',
	family: 'Данчин',
	patronymic: 'Витальевич',
	age: 26,
	gender: 'male',
	phone: {
		type: 'smartphone'
	}
}


console.log('------------- 1 -------------')


const keys = Object.keys(person)
console.log(keys)

for (let i = 0; i < keys.length; i++) {
	const key = keys[i]

	console.log(key, person[key])
}



console.log('------------- 2 -------------')


let user = {}

for (let i = 0; i < keys.length; i++) {
	const key = keys[i]

	user[key] = person[key]
}

console.log(person, user)
console.log(person === user)

// НО!!!!
console.log(
	'person.phone === user.phone',
	person.phone === user.phone
)




console.log('------------- 3 -------------')

user = {}
Object.assign(user, person)

console.log(user)

// НО!!!!
console.log(
	'person.phone === user.phone',
	person.phone === user.phone
)




console.log('------------- 4 -------------')


const player = Object.assign({}, person)

console.log(
	'Object.assign({}, person) === player',
	Object.assign({}, person) === player
)

console.log(player)

// НО!!!!
console.log(
	'player.phone === user.phone',
	player.phone === user.phone
)






console.log('------------- 5 -------------')


const copy = JSON.parse(JSON.stringify(person))
console.log(copy)

console.log(JSON.stringify(person))


// НО!!!!
console.log(
	'player.phone === copy.phone',
	player.phone === copy.phone
)