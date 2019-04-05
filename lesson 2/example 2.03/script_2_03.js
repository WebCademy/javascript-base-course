// Тема: prompt, parseInt, alert, if, else if, else, break, continue
// Примечание: конкатинация строк, специ-символ, 

const MIN = 1
const MAX = 100
const NUMBER = MIN + Math.floor(Math.random() * (MAX - MIN + 1))
const HOPS = 2

let greeting = ''

greeting += 'Сыграем в игру "Угадай число"!\n'
greeting += 'Я загадал число от ' + MIN + ' до ' + MAX + '. У тебя есть ' + HOPS + ' попыток его отгадать.\n'
greeting += 'Причем после каждой попытки я буду давать тебе подсказку.\n'

// console.log(greeting)
alert(greeting)

let isWin = false
let hint = ''

for (let i = 0; i < HOPS; i++) {
	let message = 'Твоя ' + (i + 1) + ' попытка. Твое число:'

	if (hint) {
		message = hint + message
	}

	const answer = parseInt(prompt(message))
	// console.log(typeof answer, answer)

	if (answer === NUMBER) {
		isWin = true
	}

	else if (answer > NUMBER) {
		hint = 'Задуманное число меньше ' + answer + '\n'
		continue
	}

	else {
		hint = 'Задуманное число больше ' + answer + '\n'
		continue
	}

	if (isWin) {
		break
	}
}

if (isWin) {
	const message = 'Мои поздравления! Ты угадал задуманное ' + NUMBER + ' число.'
	alert(message)
}

else {
	const message = 'Увы! Загаданное число было ' + NUMBER + '. В следующий раз сыграешь лучше.'
	alert(message)
}