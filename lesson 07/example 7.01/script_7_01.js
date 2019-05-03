// console.log('----------- 1 -----------')
// // То что уже знаем

// let x = 5
// const y = 5



// console.log('----------- 2 -----------')
// // Деструктуризация массива

// let [a, b, c, , d] = [0, 1, 2, 3, 4, 5]
// console.log({ a, b, c, d})

// let a = array[0]
// let [a] = array



// console.log('----------- 3 -----------')
// // spread

// let [a, b, ...c] = [0, 1, 2, 3, 4, 5]
// console.log({ a, b, c})




// console.log('----------- 4 -----------')
// // spread и rest для функции

// console.log(
// 	getSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
// )

// function getSum (a, b, ...args) {

// 	console.log(a, b, args)
// 	console.log(a, b, ...args)

// 	return Math.max(a, b, ...args)
// }



// console.log('----------- 5 -----------')
// // Значения по умолчанию

// // let [name, family] = []

// // console.log({ name, family })


// let [name = 'Алексей', family = getFamily(), ...rest] = []

// let [
// 	name = 'Алексей',
// 	family = getFamily(),
// 	...rest
// ] = []

// console.log({ name, family, rest })

function getFamily () {
	return 'Данчин'
}



// console.log('----------- 6 -----------')
// // Деструктуризация объекта cо значениями по умолчанию и spred

// let person = {
// 	age: 10,
// 	foo: 'bar',
// 	array: [1, 2, 3]
// }

// let {
// 	name = 'Алексей',
// 	family = getFamily(),
// 	age = 26,
// 	...another
// } = person

// console.log(another)

// console.log('----------- 7 -----------')
// // Деструктуризация с переименованием

// const { width: w, height: h = 150 } = { width: 100 }

// console.log({ w, h })



// console.log('----------- 8 -----------')
// // Конкатинация

// const a = [0, 1, 2, 3]
// const b = [4, 5, 6, 7]

// const c = [...a, ...b, 8, 9, 10]

// console.log(c)



// console.log('----------- 9 -----------')
// // Деструктуризация аргумента функции


// printGreeting()

// function printGreeting ({ name, family = 'Хорошин' }) {
// function printGreeting (a = true, b = false) {
// 	console.log(`Привет! Меня зовут ${name} ${family}!`)
// }