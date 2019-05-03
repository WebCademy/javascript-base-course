console.log('----------- 1 -----------')
// Стрелочная функция

// f1()

const f1 = () => {
	console.log('f1 fired')
}

f1() // только после объявления (что в хорошо)



console.log('----------- 2 -----------')
// Стрелочная функция и аргументы

const f2 = (a, b) => {
	console.log({a, b})
}

f2(1, 5)



console.log('----------- 3 -----------')
// Стрелочная функция с 1 аргументом

const f3 = a => {
	console.log({ a })
}

f3('Aleksey')



console.log('----------- 4 -----------')
// return

const f4 = () => {
	return 'f4 fired'
}

console.log( f4() )



console.log('----------- 5 -----------')
// Автоматический return без фигурных скобок тела функции

const f5 = () => 'f5 like f4 fired'

console.log( f5() )



console.log('----------- 6 -----------')
// Комбинация 1-го аргумента и быстрого return

const f6 = x => x**3

console.log( f6(5) )



console.log('----------- 7 -----------')
// Нет arguments

const f7 = () => {
	// console.log(arguments)
}

f7('a', 'b')



console.log('----------- 8 -----------')
// Нет своего this 

const f8 = () => console.log(this)

f8()