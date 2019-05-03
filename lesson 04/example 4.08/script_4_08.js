let obj, array

console.log('----------- 1 -----------')
// "В JS все объект" [кроме примитивов: Numbder, String, Boolean]

obj = {}
obj.name = 'obj'

console.log(obj)



console.log('----------- 2 -----------')
// Массив тоже объект

array = ['a', 'b', 'c', 'd']
array.name = 'array'

console.log(array)



console.log('----------- 3 -----------')
// Функция тоже объект

function func1 () {
	console.log(arguments)
}

func1.name = 'func1'

// console.log(func1)
console.log({ func1 })



console.log('----------- 4 -----------')
// НО! Объект, arguments, и контекст this - 3 разных объекта

function fun2 () {
	console.log(arguments === this)
	console.log(this === fun2)
	console.log(fun2 === arguments)
}

fun2.name = 'fun2'

fun2()