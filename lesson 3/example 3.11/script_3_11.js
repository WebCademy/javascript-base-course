// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/concat

// Must have
// fromCharCode, charAt, charCodeAt, concat, endsWith, includes, indexOf,
// lastIndexOf, padEnd, padStart, repeat, replace, slice, split, substring,
// trim, trimRight, trimLeft, toUpperCase, toLowerCase

console.log('------------- 1 -------------')

// Капитализация строки 
let str = '      \n\t    привет мир    '

console.log(str)

str = str.trim()
console.log(str)

console.log(str[0].toUpperCase() + str.substring(1))

str = str.replace('привет', 'Hello').replace('мир', 'World')
console.log(str)




console.log('------------- 2 -------------')

for (let i = 0; i < 100; i++) {
	const str = i.toString().padStart(3, '0').padEnd(4, '!')

	console.log(str)
}



console.log('------------- 3 -------------')

for (let i = 0; i < 100; i++) {
	const str = i.toString()
		.padStart(3, '0')
		.split('')
		.map(Number)
		.join(' + ')

	console.log(str)
}






console.log('------------- 4 -------------')


str = '0123456789'

const substring = str.substring(3)
console.log(substring)
console.log(str)





console.log('------------- 5 -------------')

str = 'привет'
console.log(str.split('').reverse().join(' '))