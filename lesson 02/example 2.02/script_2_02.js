// Тема: вложенные циклы
// Примечание: конкатинация строк, спец-символ

const SIZE = 15

for (let i = 1; i <= SIZE; i++) {
	let str = ''

	for (let j = 1; j <= SIZE; j++) {
		str += i * j + '\t'
	}

	console.log(str)
}