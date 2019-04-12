// Зачем нужны срелочные функции?

let array, result

console.log('----------- 1 -----------')

array = [10, 3, 11, 40, 4, 7, 22]

console.log(
	array.filter(function (element) {
		if (element > 10) {
			return true
		}
	})
)

console.log(
	array.filter(function (element) {
		return element > 10
	})
)

console.log(
	array.filter((element) => {
		return element > 10
	})
)

console.log(
	array.filter((element) => element > 10)
)

console.log(
	array.filter(element => element > 10)
)

console.log(
	array.filter(x => x > 10)
)



console.log('----------- 2 -----------')
// Используйте для элементарной обработки, когда не нужно this

array = [10, 3, 11, 40, 4, 7, 22]

result = array
	.map(x => x**2)
	.filter(x => x % 2 === 0)
	.join(', ')

console.log(result)