const divElement = document.querySelector('div')
const buttonElement = document.querySelector('button')
const inputElement = document.querySelector('input')
let event

console.log('----------- 1 -----------')
// Не делайте так

// divElement.addEventListener('click', () => console.log('click'))
// divElement.click()



console.log('----------- 2 -----------')
// Рекурсивно работать не будет

divElement.addEventListener('click', () => {
	console.log('click')
	divElement.click()
})

divElement.click()



console.log('----------- 3 -----------')
// Вызов встроенных событий

inputElement.addEventListener('focus', function (event) {
	console.log(event)
})

event = new FocusEvent('focus', {
	view: window,
	bubbles: true,
	cancelable: true,
	borabora: true
})

inputElement.dispatchEvent(event)



console.log('----------- 4 -----------')
// Мне ни разу это не понадобилось

event = new Event('blabla')

divElement.addEventListener('blabla', function (event) {
	console.log(event)
})

divElement.dispatchEvent(event)



console.log('----------- 5 -----------')
// Пользовался пару раз

event = new CustomEvent('blabla', {
	target: null,
	detail: {
		name: 'Алексей'
	}
})

divElement.addEventListener('blabla', function (event) {
	console.log(event)
})

divElement.dispatchEvent(event)