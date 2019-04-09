console.log('------------- 1 -------------')

let person = {
	name: 'Алексей',
	family: 'Данчин',
	patronymic: 'Витальевич',
	age: 26,
	gender: 'male'
}

let user = person

console.log(user, person)
console.log(user === person)


console.log('------------- 2 -------------')

console.log(person.name)
console.log(user.name)

user.name = 'Дмитрий'

console.log(person.name)
console.log(user.name)


console.log('------------- 3 -------------')

person = {
	name: 'Алексей',
	family: 'Данчин',
	patronymic: 'Витальевич',
	age: 26,
	gender: 'male'
}

user = {
	name: 'Алексей',
	family: 'Данчин',
	patronymic: 'Витальевич',
	age: 26,
	gender: 'male'
}

console.log(user, person)
console.log(user === person)





console.log('------------- 4 -------------')

father = {
	name: 'Виталий',
	family: 'Данчин',
	patronymic: 'Алексеевич',
	age: 45,
	gender: 'male',
	son: {
		name: 'Алексей',
		family: 'Данчин',
		patronymic: 'Витальевич',
		age: 26,
		gender: 'male'
	}
}

console.log(father)



console.log('------------- 5 -------------')

son = father.son
son.name = 'Тимофей'

// console.log(father)
console.log(father.son.name)




console.log('------------- 6 -------------')

son = father.son

delete father.son

console.log(father, son)




console.log('------------- 6 -------------')

father.son = son
father.child = son
father.heir = son
console.log(father)




console.log('------------- 7 -------------')

father.self = father
console.log(father)