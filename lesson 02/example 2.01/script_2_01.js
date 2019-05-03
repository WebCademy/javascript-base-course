// Тема: Константы, переменне, цикл for, условный оператор if, console.log
// Примечание: конкатинация строк, математические операции +%

const FROM = -12
const TO = 23
const DIV = 7

console.log('Найдем сумму всех элементов от ' + FROM + ' до ' + TO + ' и выведем все делящиеся на ' + DIV + ' числа.')

console.log('Начало работы цикла!')

let sum = 0
for (let i = FROM; i <= TO; i++) {
	sum += i // sum = sum + i

	const mod = i % DIV

	// if условный оператор
	if (mod === 0) {
		console.log(i)
	}
}

console.log('Конец работы цикла!')

console.log('Сумма:', sum)