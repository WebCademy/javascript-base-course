console.log('----------- 1 -----------')
// Короткое имя

const name = 'Алексей'

// const person = {
// 	name: name
// }

const person = {
	name
}

console.log(person)



console.log('----------- 2 -----------')
// Вычисляемые свойства

const str = 'Алексей'

const person = {
	['name']: str
}

const person = {
	['eman'.split('').reverse().join('')]: str
}

const person = {
	[getFieldName()]: str
}

console.log({ person })

function getFieldName () {
	return 'name'
}



console.log('----------- 3 -----------')
// assign

const a = {
	x: 100,
	y: 200
}

const b = {
	x: 'hello',
	z: 300
}

Object.assign(a, b)

console.log(a)



console.log('----------- 4 -----------')
// assign

const a = {
	x: 100,
	y: 200
}

const b = {
	x: 'hello',
	z: 300
}

const c = Object.assign({}, a, b)

console.log(c)