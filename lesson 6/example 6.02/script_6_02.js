const divElement = document.querySelector('div')
const buttonElement = document.querySelector('button')
const inputElement = document.querySelector('input')

console.log('----------- 1 -----------')
// https://www.w3schools.com/jsref/obj_mouseevent.asp
// https://www.w3schools.com/jsref/obj_keyboardevent.asp
// https://www.w3schools.com/jsref/obj_focusevent.asp

buttonElement.addEventListener('click', () => console.log('click'))
buttonElement.addEventListener('dblclick', () => console.log('dblclick'))
buttonElement.addEventListener('mousemove', () => console.log('mousemove'))



console.log('----------- 2 -----------')
inputElement.addEventListener('focus', () => console.log('focus'))
inputElement.addEventListener('blur', () => console.log('blur'))



console.log('----------- 3 -----------')

let str = ''
inputElement.addEventListener('focus', function () {
	this.value = str
})

inputElement.addEventListener('blur', function () {
	str = this.value
	this.value = ''
})



console.log('----------- 4 -----------')

inputElement.addEventListener('keydown', () => console.log('keydown'))
inputElement.addEventListener('keypress', () => console.log('keypress'))
inputElement.addEventListener('keyup', () => console.log('keyup'))



console.log('----------- 5 -----------')

inputElement.addEventListener('keydown', event => console.log(event))