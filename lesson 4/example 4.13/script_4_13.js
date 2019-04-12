// Уже готовые решения окружения

let angle, obj, str, person

console.log('----------- 1 -----------')
// Math
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

console.log(Math.PI)
console.log(Math.E)

console.log(Math.sin(0))
console.log(Math.cos(0))

angle = 3 * Math.PI / 4
console.log(Math.tan(angle))



console.log('----------- 2 -----------')
// Number
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number

console.log(Number.EPSILON)
console.log(Number.MAX_VALUE)

console.log(Number.isFinite(1))
console.log(Number.isFinite(Infinity))



console.log('----------- 3 -----------')
// JSON
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON

obj = {
	name: 'Алексей',
	somFunction () {}
}


console.log(JSON.stringify(obj))

str = `
{
	"name": "Алексей",
	"family": "Данчин",
	"array": [1, 2, 3],
	"hobby": {
		"type": "Курсы JS",
		"duration": 180
	}
}
`

person = JSON.parse(str)

console.log(person)