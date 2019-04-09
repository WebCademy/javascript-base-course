console.log('------------- 1 -------------')

const names = ['Алексей', 'Дмитрий', 'Серьгей']

for (let i = 0; i < names.length; i++) {
	console.log(i, names[i])
}

for (const name of names) {
	console.log(name)
}

for (const index in names) {
	console.log(index)
}

// Не рекомендую
for (const [index, name] of names.entries()) {
	console.log(index, name)
}




console.log('------------- 2 -------------')

const person = {
	name: 'Алексей',
	family: 'Данчин',
	patronymic: 'Витальевич',
	age: 26,
	gender: 'male'
}

const keys = Object.keys(person)

for (let i = 0; i < keys.length; i++) {
	const key = keys[i]

	console.log(key, person[key])
}


// Не рекомендую
for (const [key, field] of Object.entries(person)) {
	console.log(key, field)
}


