const divElement = document.querySelector('div')
const buttonElement = document.querySelector('button')
let clickHandler

console.log('----------- 1 -----------')

buttonElement.onclick = () => {
	console.log('button click handler fired')
}

buttonElement.onclick = () => {
	console.log('another handler')
}



console.log('----------- 2 -----------')

buttonElement.addEventListener('click', () => {
	console.log('button click handler fired')
})

buttonElement.addEventListener('click', () => {
	console.log('another handler')
})



console.log('----------- 3 -----------')

buttonElement.addEventListener('click', () => {
	console.log(this)
	console.log('button click handler fired')
})

buttonElement.addEventListener('click', function () {
	console.log(this)
	console.log('button click handler fired')
	// this.textContent = '123'
})



console.log('----------- 4 -----------')

clickHandler = () => {
	console.log(this)
	console.log('button click handler fired')
}

buttonElement.addEventListener('click', clickHandler)

function clickHandler2 () {
	console.log(this)
	console.log('button click handler fired')
	// this.textContent = '123'
}

buttonElement.addEventListener('click', clickHandler2)



console.log('----------- 5 -----------')
// https://developer.mozilla.org/ru/docs/Web/API/MouseEvent

buttonElement.addEventListener('click', function (mouseEvent) {
	console.log(mouseEvent)
})