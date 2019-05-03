// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array


//	Must know:
//  concat, every, filter, find, findIndex,
//	forEach, includes, indexOf, join,
//	lastIndexOf, map, pop, push, reduce, reduceRight,
//	reverse, shift, slice, sort, splice


// Для самостоятельно изучения: reduceRight, fill, reverse

console.log('------------- 1 -------------')

const a = [0, 1, 2]
const b = [3, 4, 5]
const c = a.concat(b)
const d = [].concat(a, b, a, b)

console.log(c)
console.log(d)
// console.log(a) // не изменено


console.log('------------- 2 -------------')

const names = ["Алексей", "Петр", "Серьгей", "Дмитрий", "Ольга", "Тимофей", "Алексей", "Михаил", "Анна", "Ольга"]
console.log(names)

console.log(
	"names.includes('Ольга')",
	names.includes('Ольга')
)

console.log(
	"names.includes('NotName')",
	names.includes('NotName')
)

console.log(
	"names.indexOf('Алексей')",
	names.indexOf('Алексей')
)

console.log(
	"names.lastIndexOf('Алексей')",
	names.lastIndexOf('Алексей')
)

console.log(
	"names.findIndex(isFemale)",
	names.findIndex(isFemale)
)

console.log(
	"names.find(isFemale)",
	names.find(isFemale)
)




console.log('------------- 3 -------------')

// Заметим, что names не меняется
const females = names.filter(isFemale)
console.log(females)


const males = names.filter(isMale)
console.log(males)


const uniqs = names.filter(isUniq)
console.log(uniqs)





console.log('------------- 4 -------------')

for (let i = 0; i < names.length; i++) {
	console.log(i, names[i])
}

names.forEach(function (element, index, array) {
	// Важно: element !== array[index]
	console.log(index, element)
})



console.log('------------- 5 -------------')

// При этом names не меняется
const messages = names.map(function (element, index, array) {
	return `Имя "${element}" очень крутое!`
})

console.log(messages)


console.log('------------- 6 -------------')

console.log(names.join(', '))
console.log([1, 2, 3, 4, 5].join(' + '), '= 15')




console.log('------------- 7 -------------')

const result = names.reduce(function (acc, element, index, array) {
	return acc + `${index} of array is "${element}";\n`
}, '')

console.log(result)


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10]
const sum = numbers.reduce(function (acc, element, index, array) {
	return acc + element
}, 0)

console.log(sum)
















// Additional
function isFemale (element, index, array) {
	const femaleNames = ["Ольга", "Анна"]
	return femaleNames.includes(element)
}

function isMale (element, index, array) {
	return !isFemale(element, index, array)
}

function isUniq (element, index, array) {
	return array.indexOf(element) === array.lastIndexOf(element)
}