const divElement = document.querySelector('div')
const buttonElement = document.querySelector('button')
const inputElement = document.querySelector('input')

console.log('----------- 1 -----------')

buttonElement.addEventListener('click', event => {
	console.log('buttonElement', event)
	// event.myData = { name: 'Алексей' }
	// event.stopPropagation()
})

divElement.addEventListener('click', event => {
	console.log('divElement', event)
})

document.addEventListener('click', event => {
	console.log('document', event)
})



console.log('----------- 2 -----------')

buttonElement.addEventListener('click', event => {
	event.stopImmediatePropagation()
	console.log('click')
})
buttonElement.addEventListener('click', event => console.log('click'))
buttonElement.addEventListener('click', event => console.log('click'))
buttonElement.addEventListener('click', event => console.log('click'))
buttonElement.addEventListener('click', event => console.log('click'))
buttonElement.addEventListener('click', event => console.log('click'))


console.log('----------- 3 -----------')

inputElement.addEventListener('keydown', event => {
	if (!event.code.includes('Digit')) {
		event.preventDefault()		
	}
})